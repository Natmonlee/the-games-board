import type BlogPost from "../types/BlogPost.ts";

type Props = {
  postData: BlogPost;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const Post = ({ postData }: Props) => {
  const { content, author, tagline, createdAt, updatedAt } = postData;

  const createdTimestamp = new Date(createdAt);
  const updatedTimestamp = new Date(updatedAt);

  // Check if we want to show that post has been updated
  const isUpdated = updatedTimestamp.toString() !== createdTimestamp.toString();

  return (
    <article className="post">
      <h2 style={{ padding: "0px 25px", textAlign: "center" }}>{tagline}</h2>
      <div className="postDetails">
        <p>
          <b>{author}</b>
        </p>
        <span>
          Created - {createdTimestamp.toLocaleString(undefined, dateOptions)}
          {isUpdated && (
            <>
              <br />
              Updated -{" "}
              {updatedTimestamp.toLocaleString(undefined, dateOptions)}
            </>
          )}
        </span>
      </div>
      <p className="postContent">{content}</p>
    </article>
  );
};

export default Post;
