/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarV2 from '../components/NavBarV2'
import {  useParams } from 'react-router-dom';
import { useContext,useEffect,useState } from "react"; 
import { ethers } from "ethers" ;
import {TenderAppContext} from"../context/TenderAppContext"
import { Link } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function TenderPage(
    Form,Title,Description,BidBond,prequalificationDeadline,
    BidSubmiissionDeadlind,ContractSignDeadline,
    EstimatedProjectCost,KeyWord
     )
      {
        const [tenders,setTenders] = useState("");

        const {
          getTendersByAuthor
        } = useContext(TenderAppContext);
      
        useEffect(()=> {
          getTendersByAuthor().then(
            (value)=> {
              console.log(value)

              setTenders(value)
      
          }).catch(
            (error)=> {
              const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";
              console.log(error);
              alert(errorMessage);
          })
        },[])

  return (
    <>

    

      {tenders.length === 0   ? (
        <NoOffers />
      ) : (
        <div className="offers-list">
          {tenders.map((tender, index) => (
                  <div className="min-w-screen min-h-screen bg-slate-950 flex items-center p-5 lg:p-10 overflow-hidden relative">
                  <div className="w-full max-w-6xl rounded bg-secondary shadow-xl p-10 lg:p-20 mx-auto text-sky-400 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                      <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                          <img
                            src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                            className="w-full relative z-10"
                            alt=""
                          />
                          <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            
                          <h1 className="font-bold uppercase text-2xl text-sky-50 mb-5">
                            {tender.form}
                          </h1>
            
                          <h2>
                            {tender.title}
                            </h2>
            
                          <p className="text-sm">
                            {tender.description}
                          </p>
          
                          
                          <p>
                            {tender.keyWord}
                          </p>
            
                        </div>
                          <div className="inline-block align-bottom">
                            <Link 
                            to="/apply-tender"
                            className="bg-sky-700 opacity-75 hover:opacity-100 text-sky-50 hover:text-sky-50 rounded-full px-10 py-2 font-semibold">
                              <i className="mdi mdi-cart -ml-2 mr-2" /> Apply  
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

          ))}
        </div>
      )}

  </>

  )
}

const NoOffers = () => {
  return (
    <div className="no-offers-container flex flex-col items-center justify-center min-h-screen bg-primary">
      <FontAwesomeIcon icon={faBoxOpen} size="10x" color="#a0a0a0" className="mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700">You have not created tenders yet</h2>
      <p className="text-gray-500 mt-2">Try creating new tenders and they will appear here.</p>
    </div>
  );
};



export default TenderPage