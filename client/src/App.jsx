import Home from "./components/Home";
import CreateTunder from "./components/CreateTunder";
import ExploreTender from "./components/ExploreTender";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
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
