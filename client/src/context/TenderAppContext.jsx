import React from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

 export const TenderAppContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
}


const TenderAppProvider=({children})=>{

    return (

        <TenderAppContext.Provider value = {{}}>
            { children}
        </TenderAppContext.Provider>
    )
} 

export default  TenderAppProvider