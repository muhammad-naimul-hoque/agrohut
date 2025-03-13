import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./TopBanner/Banner";
import NavBar from "./Nav/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  );
}

export default App;
