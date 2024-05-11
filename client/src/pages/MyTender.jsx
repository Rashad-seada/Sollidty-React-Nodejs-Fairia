// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar2 from "../components/NavBarV2";
import SingleCard from "../components/SingleCard";
import { useContext } from "react";
import Footer from "../components/Footer";
function MyTender() {

    // const singleCard =useContext()
  return (
    <>
      <NavBar2 />
      {/* {singleCard.map((item) => (
        <singleCard  key={item} title= {item.title} name = {item.name} />
  ))}    
   */}
   <SingleCard />
   <Footer />
  </>
  )
}

export default MyTender;
