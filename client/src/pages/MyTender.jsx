// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar2 from "../components/NavBarV2";
import SingleCard from "../components/SingleCard";
import { Link, useParams } from 'react-router-dom';
import {TenderAppContext} from"../context/TenderAppContext" ;
import { useContext,useEffect ,useState} from "react";
import { ethers } from "ethers";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//Start Code Function
function MyTender({name,title,price,description}) {

  const { getTenderById, getApplicantsByTender } = useContext(TenderAppContext);
  const [tender, setTender] = useState();
  const [applicants, setApplicants] = useState();

  let { id } = useParams();

  useEffect(() => {
    console.log("id ", id);

    getApplicantsByTender(ethers.BigNumber.from(id))
      .then((value)=> {
        setApplicants(value)
      })
      .catch((error)=> {

      })

    getTenderById(ethers.BigNumber.from(id))
      .then((value) => {
        setTender(value);
      })
      .catch((error) => {

      });


  }, [id, getTenderById]);

  useEffect(() => {
    if (tender) {
      console.log("value in tender state ", tender.id);
    }
  }, [tender]);

  return (
    <div>
      {tender ? (
        <SingleCard
          title={tender.title || "title"}
          description={tender.description || "title"}
          name={tender.from || "title"}
          price={parseInt(tender.bidBond) || "title"}
        />
        
      ) : (
        <Skeleton /> // Simple, single-line loading skeleton
      )}
      
    </div>
  );
  
}
export default MyTender;