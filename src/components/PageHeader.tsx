import { useNavigate } from "react-router-dom";



const PageHeader = () => {
  const navigate = useNavigate()
  return (
    <header onClick={() => navigate("/")} style={{cursor: "pointer", userSelect: 'none'}}>
      <img
        src="/assets/images/bannerImage.jpg"
        alt=""
        aria-hidden="true"
        className="full-width"
      ></img>
      <p className="overlay-text">The Games Board</p>
    </header>
  );
};

export default PageHeader;
