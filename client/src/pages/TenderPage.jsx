/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarV2 from '../components/NavBarV2'
import {  useParams } from 'react-router-dom';
import { useContext,useEffect } from "react"; 
import { ethers } from "ethers" ;
import {TenderAppContext} from"../context/TenderAppContext"
import { Link } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
function TenderPage(
    Form,Title,Description,BidBond,prequalificationDeadline,
    BidSubmiissionDeadlind,ContractSignDeadline,
    EstimatedProjectCost,KeyWord
     )
      {
        let {id} = useParams();
        const { getTenderById,tender,setTenders } = useContext(TenderAppContext);

  // useEffect( () => {
  //   console.log("id "+ id)
  //   getTenderById(ethers.BigNumber.from(id))
  //   .then((value)=> {
  //     setTenders(value)
  //     console.log("value ",value)
  //   })
  // })
  return (
    <>

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
                {Form}
                From is here
              </h1>

              <h2>
                {Title}
                Title is here
                </h2>

              <p className="text-sm">
                {Description}
                Description is here
              </p>

              <h3>
                {BidBond}
                BidBond
              </h3>
              <h3>
                {prequalificationDeadline}
                prequalificationDeadline
              </h3>
              
              <h3>
                {BidSubmiissionDeadlind}
                BidSubmiissionDeadlind
              </h3>
              
              <h3>
                {ContractSignDeadline}
                ContractSignDeadline
              </h3> 
              
              <p>
                {KeyWord}
                KeyWord
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
      {/* <SingleCard/> */}
  </>

  )
}





export default TenderPage