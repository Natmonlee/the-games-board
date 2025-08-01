import { useState, useEffect, type FormEvent } from "react";
import type BlogPost from "../types/BlogPost.ts";
import PageHeader from "./PageHeader.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import getBackendUrl from "../utils/getBackendUrl.ts";

type Props = {
  postId?: string;
};

const EditPost = ({ postId }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [authorValue, setAuthorValue] = useState<string>("");
  const [taglineValue, setTaglineValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");

  const navigate = useNavigate();
  const backendUrl = getBackendUrl();

  useEffect(() => {
    if (!postId) {
      setLoaded(true);
      return;
    }
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${backendUrl}/post/${postId}`);
        const singleBlogPost: BlogPost = response.data;

        setAuthorValue(singleBlogPost.author);
        setTaglineValue(singleBlogPost.tagline);
        setContentValue(singleBlogPost.content);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(
          "Something went wrong while fetching the post. Please refresh the page."
        );
      }
    };

    fetchPost();
  }, [postId, backendUrl]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Determine if editing a current post or creating a new post
      if (postId) {
        await axios.patch(`${backendUrl}/post/${postId}`, {
          author: authorValue,
          tagline: taglineValue,
          content: contentValue,
        });
        navigate(`/viewPost/${postId}`);
      } else {
        await axios.post(`${backendUrl}/post`, {
          author: authorValue,
          tagline: taglineValue,
          content: contentValue,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong while saving the post. Please try again.");
    }
  };

  const handleCancel = () => {
    // Navigate to home page if creating and current post if editing
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
          <div className="postFormDetails">
            <span>
              <i>Author</i>
            </span>
            <TextField
              sx={{ "& .MuiInputBase-input": { padding: "4px 8px" } }}
              style={{ width: "30%" }}
              slotProps={{
                htmlInput: {
                  maxLength: 30,
                },
              }}
              className="textField"
              variant="outlined"
              required
              onChange={(e) => setAuthorValue(e.target.value)}
              value={authorValue}
            />
          </div>
          <div className="postFormDetails">
            <span>
              <i>Tagline</i>
            </span>
            <TextField
              sx={{ "& .MuiInputBase-input": { padding: "4px 8px" } }}
              slotProps={{
                htmlInput: {
                  maxLength: 100,
                },
              }}
              style={{ width: "50%" }}
              className="textField"
              variant="outlined"
              required
              onChange={(e) => setTaglineValue(e.target.value)}
              value={taglineValue}
            />
          </div>
          <div className="postFormDetails">
            <span>
              <i>Content</i>
            </span>
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
            <Button variant="contained" type="submit" className="buttonPrimary">
              {postId ? "Edit" : "Create"} Post
            </Button>
            <Button
              className="buttonSecondary"
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
