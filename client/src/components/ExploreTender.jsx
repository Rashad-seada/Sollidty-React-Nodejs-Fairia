import React from "react";
import NavBar from "../utility/NavBar";
import Footer from "../utility/Footer";
import Card from "../utility/Card";
import SearchBar from "../utility/SearchBar";
function ExploreTender() {
  return (
    <div className="bg-slate-950">
      <NavBar />
      <SearchBar />

     
        <div style={{fontSize:"80px"}}>
          <p className="bg-slate-950 flex justify-center text-cyan-50"> Explore<span className="text-sky-400">Tender</span> </p>
        </div>
        <div
          className="flex flex-wrap justify-around w-100% m-20  "
          style={{ padding: "10px" }}
        >
          <Card title="First" info="Ibrahim  shoeib" />
          <Card title="second" info="Rashad" className="p-10" />
          <Card title="third" info="Ahmed" />
          <Card title="First" info="Ibrahim  shoeib" />
          <Card title="second" info="Rashad" className="p-10" />
          <Card title="third" info="Ahmed" />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreTender;
