import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./TopBanner/Banner";
import NavBar from "./Nav/Navbar";
import Categories from "./Categories/ProductCategories";
import ProductCategories from "./Categories/ProductCategories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      {/* <Categories></Categories> */}
    </>
  );
}

export default App;
