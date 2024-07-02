import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Women from "./components/Women/Women";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      {/* <Header />
      <Banner />
      <Women /> */}

      <Routing />
      <Footer />
    </>
  );
}

export default App;
