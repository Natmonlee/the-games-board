import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Edit from "./pages/Edit.tsx";

function App() {
  return <>
  <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </>;
}

export default App;
