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
function MyTender(name,title,price,description) {

  const { getTenderById } = useContext(TenderAppContext);
  const [tender, setTender] = useState();
  let { id } = useParams();

  useEffect(() => {
    console.log("id ", id);
    getTenderById(ethers.BigNumber.from(id))
      .then((value) => {
        setTender(value);
        console.log("value ", value);
      })
      .catch((error) => {
        console.log("Error Is ", error);
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
