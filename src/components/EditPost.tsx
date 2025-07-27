import { useState, useEffect, type FormEvent } from "react";
import type BlogPost from "../types/BlogPost.ts";
import PageHeader from "./PageHeader.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { pink } from "@mui/material/colors";

type Props = {
  postId?: string;
};

const EditPost = ({ postId }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [authorValue, setAuthorValue] = useState<string>();
  const [taglineValue, setTaglineValue] = useState<string>();
  const [contentValue, setContentValue] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) {
      setLoaded(true);

      return;
    }
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/post/${postId}`
        );
        const singleBlogPost: BlogPost = response.data;

        setAuthorValue(singleBlogPost.author);
        setTaglineValue(singleBlogPost.tagline);
        console.log(singleBlogPost.content);
        setContentValue(singleBlogPost.content);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(postId);
    if (postId) {
      await axios.patch(`http://localhost:3000/post/${postId}`, {
        author: authorValue,
        tagline: taglineValue,
        content: contentValue,
      });
      navigate(`/viewPost/${postId}`);
    } else {
      await axios.post("http://localhost:3000/post", {
        author: authorValue,
        tagline: taglineValue,
        content: contentValue,
      });
      navigate("/");
    }
  };

  const handleCancel = () => {
    if (postId) {
      navigate(`/viewPost/${postId}`);
    } else {
      navigate("/");
    }
  };

  if (loaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageHeader />

        <form className="post" onSubmit={handleSubmit}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <span style={{fontSize: '14px'}}><i>Author</i></span>
          <TextField
            sx={{ '& .MuiInputBase-input': { padding: "4px 8px" } }}
            style={{width: '30%'}}
            className="textField"
            variant="outlined"
            required
            onChange={(e) => setAuthorValue(e.target.value)}
            value={authorValue}
          />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <span style={{fontSize: '14px'}}><i>Tagline</i></span>
          <TextField
            sx={{ '& .MuiInputBase-input': { padding: "4px 8px" } }}
            style={{width: '50%'}}
            className="textField"
            variant="outlined"
            required
            onChange={(e) => setTaglineValue(e.target.value)}
            value={taglineValue}
          />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <span style={{fontSize: '14px'}}><i>Content</i></span>
          <TextField
            slotProps={{
              input: {
                style: {
                  padding: "4px 8px",
                },
              },
            }}
            minRows={3}
            className="textField"
            variant="outlined"
            required
            multiline
            onChange={(e) => setContentValue(e.target.value)}
            value={contentValue}
          />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "	#1E7F84" }}
            >
              {postId ? "Edit" : "Create"} Post
            </Button>
            <Button
              style={{ backgroundColor: "#A09B92" }}
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

export default EditPost;
