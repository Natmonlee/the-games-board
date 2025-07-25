import type BlogPost from "../types/BlogPost.ts";

const Post = ({ postData }: { postData: BlogPost }) => {
  const { content, author, tagline, createdAt } = postData;
  console.log(content, author, tagline);

  const timestamp = new Date(createdAt);

  return (
    <article className="post">
      <h2>{tagline}</h2>
      <div>
        <span>{author}</span>
        <time>{timestamp.toLocaleDateString()}</time>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Post;
