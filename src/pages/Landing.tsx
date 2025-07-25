import axios from "axios";
import { useEffect, useState } from "react";
import type BlogPost from "../types/BlogPost.ts";

const Landing = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allBlogPosts: BlogPost[] = await axios.get(
          "http://localhost:3000/post"
        );
        setBlogPosts(allBlogPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return <div>{JSON.stringify(blogPosts)}</div>;
};

export default Landing;
