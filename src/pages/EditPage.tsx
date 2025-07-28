import EditPost from "../components/EditPost.tsx";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const { postId } = useParams();
  if (postId) {
    return <EditPost postId={postId} />;
  }
};

export default EditPage;
