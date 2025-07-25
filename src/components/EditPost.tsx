import { useState } from "react";
import type BlogPost from "../types/BlogPost.ts";
import PageHeader from "./PageHeader.tsx";

const EditPost = ({ postData }: { postData: BlogPost }) => {
  const { content, author, tagline, createdAt, id } = postData;
  console.log(content, author, tagline);

  const timestamp = new Date(createdAt);

  const [authorValue, setAuthorValue] = useState(author);
  const [taglineValue, setTaglineValue] = useState(tagline);
  const [contentValue, setContentValue] = useState(content);

  return (
    <>
    <PageHeader/>
    <form className="post">
      <input
        onChange={(e) => setTaglineValue(e.target.value)}
        value={taglineValue}
      ></input>
      <div>
        <input
          onChange={(e) => setAuthorValue(e.target.value)}
          value={authorValue}
        ></input>
        <time>{timestamp.toLocaleDateString()}</time>
      </div>
      <textarea
        onChange={(e) => setContentValue(e.target.value)}
        value={contentValue}
      ></textarea>
      <input type="submit" onSubmit={() => console.log(id)}></input>
    </form>
    </>
  );
};

export default EditPost;
