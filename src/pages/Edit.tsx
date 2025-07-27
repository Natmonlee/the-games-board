import EditPost from "../components/EditPost.tsx";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { postId } = useParams();
  console.log(postId)
  if (postId) {
    return <EditPost postId={postId} />;
  }
};

export default Edit;
