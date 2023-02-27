import React from "react";
import { Routes, Route } from "react-router-dom";
import Apps from "../pages/Apps";
import Details from "../pages/Details";
import GameDetails from "../pages/GameDetails";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Movies from "../pages/Movies";
import ProductsList from "../pages/ProductsList";

export default function AppRoutes({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/apps" element={<Apps />} />
      <Route exact path="/games" element={<Games />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/details" element={<Details />} />
      <Route exact path="/library" element={<Library />} />
      <Route exact path="/list" element={<ProductsList />} />
      <Route exact path="/game_details" element={<GameDetails/>} />
      <Route path="*" exact={true} element={<Home />} />
    </Routes>
  );
}
