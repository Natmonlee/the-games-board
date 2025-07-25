import "./styles.css";
import PageHeader from "./components/PageHeader.tsx";
import Landing from "./pages/Landing.tsx";

function App() {
  return <>
  <PageHeader></PageHeader>
  <Landing/>
  <img
        src="/assets/images/backgroundImage.jpg"
        alt=""
        aria-hidden="true"
        className="full-width"
      ></img>
  </>;
}

export default App;
