import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
function ExploreTender() {
  return (
    <div className="bg-slate-950">
      <NavBar />

      <div style={{fontSize:"80px"}}>
          <p className="bg-slate-950 flex justify-center text-cyan-50"> Explore<span className="text-sky-400">Tender</span> </p>
        </div>


      <SearchBar />

     
       
        <div
          className="flex flex-wrap justify-around w-100% m-21  "

          style={{ padding: "10px" }}
        >
          <Card title="First" info="Ibrahim  shoeib" />
          <Card title="second" info="Rashad" className="mb-10" />
          <Card title="third" info="Ahmed" />

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
