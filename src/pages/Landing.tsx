import axios from "axios";
import { useEffect, useState } from "react";
import type BlogPost from "../types/BlogPost.ts";
import Post from "../components/Post.tsx";
import PageHeader from "../components/PageHeader.tsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/post");
        const allBlogPosts: BlogPost[] = response.data;
        setBlogPosts(allBlogPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreateClick = () => {
    navigate("/Create");
  };

  const handlePostClick = (e: React.MouseEvent, postId: number) => {
    const target = e.target as HTMLElement;
    console.log(target);
    if (target.closest(".post") == null) return;
    navigate(`/ViewPost/${postId}`);
  };

  return (
    <>
      <PageHeader />
      <div className="postContainer">
        <Button
          style={{ backgroundColor: "#1E7F84", margin: "20px 10px 10px 10px" }}
          variant="contained"
          onClick={() => handleCreateClick()}
        >
          Create Post
        </Button>
        {blogPosts.map((post) => {
          return (
            <div
              onClick={(e) => handlePostClick(e, post.id)}
              className="full-width"
            >
              <Post key={post.id} postData={post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Landing;
