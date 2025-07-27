import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Edit from "./pages/Edit.tsx";
import ViewPost from "./pages/ViewPost.tsx";
import Create from "./pages/Create.tsx";

function App() {
  return <>
  <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/edit/:postId" element={<Edit />} />
      <Route path="/viewPost/:postId" element={<ViewPost />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </>;
}

export default App;
