import Home from "./pages/Home";
import CreateTender from "./pages/CreateTender";
import ExploreTender from "./pages/ExploreTender";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import TenderPage from "./pages/TenderPage";
import MyTender from "./pages/MyTender";
import MyOffers from "./pages/MyOffers";
const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateTender" element={<CreateTender  />} />
        <Route path="/ExploreTender" element={<ExploreTender />} />
        <Route path="/TenderPage" element={<TenderPage />} />
        <Route Path="/About" element={<About />} />
        <Route path="/MyTender" element={ <MyTender />} />
        <Route path="/MyOffers" element={ <MyOffers />} />
      </Routes>
    </div>
  );
};

export default App;
