import type BlogPost from "../types/BlogPost.ts";

type Props = {
  postData: BlogPost;
};
const Post = ({ postData }: Props) => {
  const { content, author, tagline, createdAt } = postData;

  const timestamp = new Date(createdAt);

  return (
    <article className="post">
      <h2 style={{padding: '0px 20px'}} >{tagline}</h2>
      <div style={{ display: "flex", fontSize: "14px", padding: '0px 20px' }}>
        <span>
          <i>{author}</i>
        </span>
        <time> - {timestamp.toLocaleDateString()}</time>
      </div>
      <p
        style={{
          backgroundColor: "#fbf1dc",
          padding: "10px",
          margin: "0px 20px",
          border: "1px solid #D6D0C4",
          borderRadius: "4px",
        }}
      >
        {content}
      </p>
    </article>
  );
};

export default Post;
