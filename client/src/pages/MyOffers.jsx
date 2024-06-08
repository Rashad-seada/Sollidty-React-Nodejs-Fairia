// eslint-disable-next-line no-unused-vars
import React from 'react'
import OfferCard from '../components/OfferCard'
import {TenderAppContext} from"../context/TenderAppContext"
import  { useContext  , useEffect,useState } from "react";// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function MyOffers({title,description}) {


  const [tenders,setTenders] = useState("");

  const {
    getTendersByApplicant
  } = useContext(TenderAppContext);

  useEffect(()=> {
    getTendersByApplicant().then(
      (value)=> {
        setTenders(value)

        console.log(value)
    }).catch(
      (error)=> {
        const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";
        console.log(error);
        alert(errorMessage);
    })
  },[])

  return (

<div className="main-container">
      {tenders.length === 0  || tenders ? (
        <NoOffers />
      ) : (
        <div className="offers-list">
          {tenders.map((offer, index) => (
                  <OfferCard title= {title} description = {description} />
          ))}
        </div>
      )}
    </div>

          
  )
}

const NoOffers = () => {
  return (
    <div className="no-offers-container flex flex-col items-center justify-center min-h-screen bg-primary">
      <FontAwesomeIcon icon={faBoxOpen} size="10x" color="#a0a0a0" className="mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700">You have no offers</h2>
      <p className="text-gray-500 mt-2">Try applying for new offers.</p>
    </div>
  );
};

export default MyOffers