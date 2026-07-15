import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Home from "./";
import Rooms from "./pages/room-queen";
import Rooms from "./pages/room-king";
import Rooms from "./pages/room-suite";
import Error from "./pages/Error";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:slug" element={<SingleRoom />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
