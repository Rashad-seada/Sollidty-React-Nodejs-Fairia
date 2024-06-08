// eslint-disable-next-line no-unused-vars
import React from 'react'
import OfferCard from '../components/OfferCard'
import {TenderAppContext} from"../context/TenderAppContext"
import  { useContext  } from "react";// eslint-disable-next-line no-unused-vars

function MyOffers({title,description}) {

  const {
    getTendersByApplicant
  } = useContext(TenderAppContext);


  return (
    <div>
      <OfferCard title= {title} description = {description} />
          
      </div>
  )
}
export default MyOffers