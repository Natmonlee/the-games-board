import axios from "axios";
import { useEffect, useState } from "react";
import type BlogPost from "../types/BlogPost.ts";
import Post from "../components/Post.tsx";
import EditPost from "../components/EditPost.tsx";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.tsx";

const Landing = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

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

  return (
    <>
    <PageHeader/>
    <div className="postContainer">
      {blogPosts.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
      {blogPosts.map((post) => {
        return <EditPost key={post.id} postData={post} />;
      })}
      <Link to={"/Edit"}>Edit Post</Link>
    </div>
    </>
  );
};

export default Landing;
