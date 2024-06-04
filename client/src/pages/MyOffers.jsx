// eslint-disable-next-line no-unused-vars
import React from 'react'
import OfferCard from '../components/OfferCard'
import {TenderAppContext} from"../context/TenderAppContext"
import  { useContext  } from "react";// eslint-disable-next-line no-unused-vars
import NavBarV2 from '../components/NavBarV2';

function MyOffers() {

  const {
    getTendersByApplicant
  } = useContext(TenderAppContext);


  return (
    <div>
      <OfferCard />
              {/* {getTendersByApplicant.map((item, index) => (
    <OfferCard  key={index} title= {item.title} description = {item.description}  />

))}  */}

      </div>
  )
}
export default MyOffers