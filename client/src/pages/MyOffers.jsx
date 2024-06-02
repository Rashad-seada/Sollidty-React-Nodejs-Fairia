// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBarV2 from '../components/NavBarV2'
import Card from "../components/Card"
import Footer from '../components/Footer'
function MyOffers() {

  return (
    <div>
              <NavBarV2 />
              {Offer.map((tender, index) => (
    <Card  key={index} title= {tender.title} description = {tender.description} id = {tender.id} bidBond = {tender.bidBond}/>
))}
<Footer />
      </div>
  )
}
export default MyOffers