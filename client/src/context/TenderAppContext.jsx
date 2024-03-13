<<<<<<< HEAD
=======
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
    tenderAppContract,
  });
};

const TenderAppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  //const [ allTenders ,setAllTenders] = useState([])

  const checkIfTheWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");
    const accounts = await ethereum.request({
      method: "eth_accounts",
    });
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      throw new Error("no etherum object");
    }
  };

  // const getAllTenders = async ()=> {
  //     if (ethereum) {
  //         const tenderAppContract = getEthereumContract();

  //         const allTenders = await tenderAppContract.getTenders()
  //         .then((tenders) => {
  //             setAllTenders(tenders);
  //         }).catch((error)=> {
  //             throw new Error(error.message)
  //         });
  //     }
  // }

  useEffect(() => {
    checkIfTheWalletIsConnected();
    //getAllTenders();
    // console.log(ethereum);
  }, []);

  return (
    <TenderAppContext.Provider value={{ connectWallet }}>
      {children}
    </TenderAppContext.Provider>
  );
};

export default TenderAppProvider;
>>>>>>> 718be9c2773d848ff941bf1adec3ae93c6095b3b
