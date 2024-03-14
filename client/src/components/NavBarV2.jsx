// eslint-disable-next-line no-unused-vars
import React, { useContext ,  useEffect, useState } from "react";// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client'
import {TenderAppContext} from"../context/TenderAppContext"

function NavBarV2() {

  const {
    connectWallet,
    currentAccount 
  } = useContext(TenderAppContext);


  useEffect( () => {
    console.log(currentAccount)
  }, []);

  return (

    <div class="bg-primary">
        <header class="">
            <div class="px-4 mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 lg:h-20">
                    <div class="flex-shrink-0">
                        <a href="#" title="" class="flex">
                        <a href="/" title="" class=" text-white text-4xl   transition-all duration-200 hover:text-opacity-80"> Faira </a>

                        </a>
                    </div>

                    <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">

                    </button>

                    <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <a href="/ExploreTender" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Explore Tenders </a>

                        <a href="/CreateTender" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Create Tender </a>

                        <a href="#" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> About </a>

                    </div>


                
                        <a href="#" title="" onClick = { ()=> connectWallet() }class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-secondary rounded-full" role="button">{!currentAccount ?  "Connect Wallet" :   "Wallet Connected" } </a>

                  
                </div>
            </div>
        </header>

   
    </div>

  )
}

export default NavBarV2
