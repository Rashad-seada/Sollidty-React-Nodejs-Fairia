// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar2 from "../components/NavBarV2";
import SingleCard from "../components/SingleCard";
import { Link, useParams } from 'react-router-dom';
import {TenderAppContext} from"../context/TenderAppContext" ;
import { useContext,useEffect } from "react";
import { ethers } from "ethers";
//Start Code Function
function MyTender(name,title,price,description) {

  const { getTenderById,tender,setTenders } = useContext(TenderAppContext);
  let {id} = useParams();
    console.log("id "+ id)

    

  getTenderById(ethers.BigNumber.from(id))
    .then((value)=> {
      setTenders(value)
      console.log("value ",value)
    }).catch((error)=> {
      console.log("Error Is ",error)
    })

  const singleTenderPage =  <SingleCard  />

  return (
    <>
        <SingleCard  />
    </>
  );
}
export default MyTender;
