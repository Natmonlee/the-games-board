import { useState, useEffect, type FormEvent } from "react";
import type BlogPost from "../types/BlogPost.ts";
import PageHeader from "./PageHeader.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  postId?: string;
};

const EditPost = ({ postId }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [authorValue, setAuthorValue] = useState<string>();
  const [taglineValue, setTaglineValue] = useState<string>();
  const [contentValue, setContentValue] = useState<string>();
  const [createdAt, setCreatedAt] = useState<Date>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) {
      setLoaded(true);

      return;
    }
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:3000/post");
        const allBlogPosts: BlogPost[] = response.data;
        const singleBlogPost: BlogPost = allBlogPosts[0];

        setAuthorValue(singleBlogPost.author);
        setTaglineValue(singleBlogPost.tagline);
        setContentValue(singleBlogPost.content);
        setCreatedAt(singleBlogPost.createdAt);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (postId) {
      console.log("SUBMITTING DATA!");
      navigate(`/viewPost/${postId}`);
    } else {
      console.log("SUBMITTING DATA!");
      navigate("/");
    }
  };

  if (loaded) {
    return (
      <>
        <PageHeader />
        <form className="post" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTaglineValue(e.target.value)}
            value={taglineValue}
          ></input>
          <div>
            <input
              onChange={(e) => setAuthorValue(e.target.value)}
              value={authorValue}
            ></input>
            {createdAt ? (
              <time>{new Date(createdAt).toLocaleDateString()}</time>
            ) : null}
          </div>
          <textarea
            onChange={(e) => setContentValue(e.target.value)}
            value={contentValue}
          ></textarea>
          <button type="submit">CLICK ME</button>
        </form>
      </>
    );
  }
};

export default EditPost;
