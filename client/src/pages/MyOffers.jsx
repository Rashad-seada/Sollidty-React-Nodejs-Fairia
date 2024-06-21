import React, { useContext, useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import { TenderAppContext } from "../context/TenderAppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function MyOffers({ title, description }) {
  const [applications, setApplications] = useState([]);

  const { getApplicantsByAuther } = useContext(TenderAppContext);

  useEffect(() => {
    getApplicantsByAuther().then(
      (value) => {
        setApplications(value);
        console.log("Updated applications:", value); // Log the updated value of applications
      }).catch(
        (error) => {
          const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";
          console.error(errorMessage); // Log error message
          alert(errorMessage); // Show alert with error message
        });
  }, [getApplicantsByAuther]); // Add getApplicantsByAuther to dependency array if it's not static

  return (
    <div className="main-container">
      {applications.length === 0 ? (
        <NoOffers />
      ) : (
        <div className="offers-list">
          {applications.map((offer, index) => (
            <OfferCard key={index} title={offer.title} description={offer.description} />
          ))}
        </div>
      )}
    </div>
  );
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

export default MyOffers;
