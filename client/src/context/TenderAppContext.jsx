import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TenderAppContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tenderAppContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

    console.log({
        provider,
        signer,
        tenderAppContract
    })
}

export const TenderAppProvider = ({ children }) => {
    return (
        <TenderAppContext.Provider>
            { children }
        </TenderAppContext.Provider>
    )
} 