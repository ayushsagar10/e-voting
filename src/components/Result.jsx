import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ElectionContractBuild from './Election.json';
import { useUserContext } from "../context/user_context";
const YOUR_CONTRACT_ADDRESS = "0xDC76cF4548876ABdFdEBEDf0bAC63e08FF5Ee563";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");



const Result = () => {
    const {id, setId} = useUserContext();
    const [ecandidate1, setCand] = useState({}); 
      useEffect(() => {
		loadBlockchainData();
		}, []);
      async function loadBlockchainData() {
	  const networkId = await web3.eth.net.getId();
	  const electionContract = new web3.eth.Contract(ElectionContractBuild.abi,YOUR_CONTRACT_ADDRESS);
          electionContract.setProvider(web3.givenProvider);
          console.log( electionContract.methods.candidates(1));

	}
    return (
        <>
            <h1>Hello the vote is given to {id} </h1>
            <button onClick={()=>{
                setId(id+1);
            }}>check id</button>
        </>
        
    )
    // console.log(voteCount);

}

export default Result;