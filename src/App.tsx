import "./styles.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import EditPage from "./pages/EditPage.tsx";
import PostPage from "./pages/PostPage.tsx";
import CreatePage from "./pages/CreatePage.tsx";

function App() {
  return <>
  <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/edit/:postId" element={<EditPage />} />
      <Route path="/viewPost/:postId" element={<PostPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  </>;
}

export default App;
