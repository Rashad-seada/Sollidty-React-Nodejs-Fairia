
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
import Test from "./pages/Test";
import OfferCard from "./components/OfferCard";
import NavBarV2 from "./components/NavBarV2";
import Footer from "./components/Footer";
// import Question from "./pages/Question";
const App = () => {

  return (
    <div className="App">
      <NavBarV2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateTender" element={<CreateTender  />} />
        <Route path="/ExploreTender" element={<ExploreTender />} />
        <Route path="/TenderPage" element={<TenderPage />} />
        <Route Path="/About" element={<About />} />
        <Route path="/MyTender/:id" element={ <MyTender />} />
        <Route path="/MyOffers" element={ <MyOffers />} />
        {/* <Route path="/Question" element={ <Question />} /> */}
        <Route path="/OfferCard" element={ <OfferCard />} />

        <Route path="/test" element={ <Test />} />
      </Routes>
      <Footer />

    </div>
  );
};

export default App;