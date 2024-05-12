// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar2 from "../components/NavBarV2";
import SingleCard from "../components/SingleCard";
import { Link, useParams } from 'react-router-dom';
import {TenderAppContext} from"../context/TenderAppContext"
import { useContext,useEffect } from "react";
import { ethers } from "ethers" ;

import Footer from "../components/Footer";

function MyTender() {

  const { getTenderById ,tender,setTender} = useContext(TenderAppContext);
  let {id} = useParams();
  


  useEffect(async () => {
    console.log("id "+ id)

    await getTenderById(ethers.utils.formatBytes32String(id))
    .then((value)=> {
      setTender(value)
      console.log(value)
    })
  }, [])
  

  return (
    <>
      <NavBar2 />
        <SingleCard />
      <Footer />
    </>
  );
}

export default MyTender;
