import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabs from "../components/Tabs";
import Details from "../pages/Details";
import GameDetails from "../pages/GameDetails";
import Home from "../pages/Home";
import Library from "../pages/Library";
import ProductsList from "../pages/ProductsList";

export default function AppRoutes({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details" element={<Details />} />
      <Route exact path="/library" element={<Library />} />
      <Route exact path="/list" element={<ProductsList />} />
      <Route exact path="/tabs" element={<Tabs />} />
      <Route exact path="/fixed" element={<GameDetails/>} />
      <Route path="*" exact={true} element={<Home />} />
    </Routes>
  );
}
