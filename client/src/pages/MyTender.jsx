// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar2 from "../components/NavBarV2";
import SingleCard from "../components/SingleCard";
import {  useParams } from 'react-router-dom';
import {TenderAppContext} from"../context/TenderAppContext"
import { useContext,useEffect } from "react"; //,useState
import { ethers } from "ethers" ;

import Footer from "../components/Footer";

function MyTender() {

  const { getTenderById,tenders,setTenders } = useContext(TenderAppContext);
  let {id} = useParams();

  useEffect( () => {
    console.log("id "+ id)

    getTenderById(ethers.BigNumber.from(id))
    .then((value)=> {
      setTenders(value)
      console.log("value ",value)
    })

  })


  return (
    <>
      <NavBar2/>
      <SingleCard/>
      <Footer/>
    </>
  );
}

export default MyTender;
