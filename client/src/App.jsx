import Home from "./pages/Home";
import CreateTunder from "./pages/CreateTunder";
import ExploreTender from "./pages/ExploreTender";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";

const App = () => {

  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateTunder" element={<CreateTunder />} />
        <Route path="/ExploreTender" element={<ExploreTender />} />
        <Route Path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
