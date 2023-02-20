import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Library from "../pages/Library";

export default function AppRoutes({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details" element={<Details />} />
      <Route exact path="/library" element={<Library />} />
      <Route path="*" exact={true} element={<Home />} />
    </Routes>
  );
}
