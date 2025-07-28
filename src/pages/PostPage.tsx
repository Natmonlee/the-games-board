import PageHeader from "../components/PageHeader.tsx";
import Post from "../components/Post.tsx";
import type BlogPost from "../types/BlogPost.ts";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import getBackendUrl from "../utils/getBackendUrl.ts";

const ViewPost = () => {
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const navigate = useNavigate();

  const backendUrl = getBackendUrl();

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`${backendUrl}/post/${postId}`);
          const singleBlogPost: BlogPost = response.data;
          setBlogPost(singleBlogPost);
        } catch (error) {
          console.error("Error fetching data:", error);
          alert(
            "Something went wrong while fetching the post. Please refresh the page."
          );
        }
      };

      fetchPost();
    }
  }, [postId, backendUrl]);

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`${backendUrl}/post/${postId}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Something went wrong while deleting the post. Please try again.");
    }
  };

  const handleEditClick = () => {
    navigate(`/Edit/${postId}`);
  };

  if (blogPost) {
    return (
      <>
        <PageHeader />
        <div className="postContainer">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowBackIcon
              fontSize="large"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <Post postData={blogPost} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              onClick={handleEditClick}
              className="buttonPrimary"
            >
              Edit Post
            </Button>

            <Button
              style={{ backgroundColor: "#B03A2E" }}
              variant="contained"
              onClick={handleDeleteClick}
            >
              Delete Post
            </Button>
          </div>
        </div>
      </>
    );
  }
};

export default ViewPost;
