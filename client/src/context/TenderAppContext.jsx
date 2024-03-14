import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TenderAppContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

const TenderAppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [ allTenders ,setAllTenders] = useState([])

  const checkIfTheWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");
    const accounts = await ethereum.request({
      method: "eth_accounts",
    });
  };

  const  connectWallet = async () => {
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

  const getAllTenders = async ()=> {
      if (ethereum) {
          const tenderAppContract = getEthereumContract();

          const allTenders = await tenderAppContract.getTenders()
          .then((tenders) => {
              setAllTenders(tenders);

          }).catch(async (error)=> {
            const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";

            alert(errorMessage)
            throw new Error(errorMessage)

          });
      }
  }

  // const createTender = async ()=> {
  //   if (ethereum) {
  //     const tenderAppContract = getEthereumContract();

  //     const allTenders = await tenderAppContract.getTenders()
  //     .then((tenders) => {
  //         setAllTenders(tenders);

  //     }).catch(async (error)=> {
  //       const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";

  //       alert(errorMessage)
  //       throw new Error(errorData)

  //     });
  // }
  // }

  useEffect( () => {
    checkIfTheWalletIsConnected();
  }, []);

  return (
    <TenderAppContext.Provider value={{ connectWallet }}>
      {children}
    </TenderAppContext.Provider>
  );
};

export default TenderAppProvider;