import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Women from "./components/Women/Women";
import Home from "./components/Home/Home";
import Men from "./components/Men/Men";
import Products from "./components/products/Products";
function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Banner />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Header />
            <Home />
            <Banner />
          </>
        }
      />
      <Route
        path="/clothes/women"
        element={
          <>
            <Header />
            <Home />

            <Women />
            <Banner />
          </>
        }
      />
      <Route
        path="/clothes/men"
        element={
          <>
            <Header />
            <Home />
            <Men />
            <Banner />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Header />
            <Products />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Header />
            <Home />
            <Banner />
          </>
        }
      />
    </Routes>
  );
}

export default Routing;
