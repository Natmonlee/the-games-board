import PageHeader from "../components/PageHeader.tsx";
import Post from "../components/Post.tsx";
import type BlogPost from "../types/BlogPost.ts";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const ViewPost = () => {
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const params = useParams();
  console.log(params)

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get("http://localhost:3000/post");
          const allBlogPosts: BlogPost[] = response.data;
          const singleBlogPost: BlogPost = allBlogPosts[0];
          setBlogPost(singleBlogPost);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchPost();
    }
  }, [postId]);

  if (blogPost) {
    return (
      <>
        <PageHeader />
        <Post postData={blogPost} />
        <Link to={`/Edit/${postId}`}>Edit Post</Link>
      </>
    );
  }
};

export default ViewPost;
