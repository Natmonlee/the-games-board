import axios from "axios";
import { useEffect, useState } from "react";
import type BlogPost from "../types/BlogPost.ts";
import Post from "../components/Post.tsx";
import PageHeader from "../components/PageHeader.tsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import getBackendUrl from "../utils/getBackendUrl.ts";

const LandingPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  const backendUrl = getBackendUrl();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/post`);
        const allBlogPosts: BlogPost[] = response.data;
        setBlogPosts(allBlogPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(
          "Something went wrong while fetching the posts. Please refresh the page."
        );
      }
    };

    fetchPosts();
  }, [backendUrl]);

  const handleCreateClick = () => {
    navigate("/Create");
  };

  const handlePostClick = (e: React.MouseEvent, postId: number) => {
    // Check that user is actually clicking on post, rather than full-width container used for centering
    const target = e.target as HTMLElement;
    if (target.closest(".post") == null) return;
    navigate(`/ViewPost/${postId}`);
  };

  return (
    <>
      <PageHeader />
      <div className="postContainer">
        <Button
          className="buttonPrimary"
          style={{ margin: "20px 10px 10px 10px" }}
          variant="contained"
          onClick={() => handleCreateClick()}
        >
          New Post
        </Button>
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => {
            return (
              <div
                key={post.id}
                onClick={(e) => handlePostClick(e, post.id)}
                className="full-width"
              >
                <Post postData={post} />
              </div>
            );
          })
        ) : (
          <p style={{textAlign: 'center'}}><b>There are currently no posts available. Start by creating your own!</b></p>
        )}
      </div>
    </>
  );
};

export default LandingPage;
