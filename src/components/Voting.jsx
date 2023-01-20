import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ElectionContractBuild from './Election.json';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";


const YOUR_CONTRACT_ADDRESS = "0xDC76cF4548876ABdFdEBEDf0bAC63e08FF5Ee563";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");


const Voting = () => {
		const navigate = useNavigate();
		const {setId} = useUserContext();
		useEffect(() => {
		loadBlockchainData();
		}, []);
	async function castVote(e) {
		try {
			//await setID(e.target.value);
			const accounts = await web3.eth.getAccounts();
			setId(e.target.value);
			const electionContract = new web3.eth.Contract(ElectionContractBuild.abi, YOUR_CONTRACT_ADDRESS);
			electionContract.setProvider(web3.givenProvider);
			electionContract.methods.vote(parseInt(e.target.value));
			// console.log(electionContract.);
			
			navigate(`/result`);

			
		}
		catch (err) {
			console.log(err);
		}
	  }
	  async function loadBlockchainData() {
		  const networkId = await web3.eth.net.getId();
	  const electionContract = new web3.eth.Contract(ElectionContractBuild.abi,YOUR_CONTRACT_ADDRESS);
	  electionContract.setProvider(web3.givenProvider);
	  console.log(electionContract); 	  
	}

	
  
    return (
<div className="voting-body">
			<div className="party-parent">
				<div className="party1">
					<h1 className="party-title">BJP</h1>
					<button className="btn vote" value="1" onClick = {castVote} >VOTE</button>
				</div>
				<div className="party2">
					<h1 className="party-title">AAP</h1>
					<button className="btn vote" value="2" onClick = {castVote}>VOTE</button>
				</div>
				<div className="party3">
					<h1 className="party-title">Congress</h1>
					<button className="btn vote" value="3" onClick = {castVote}>VOTE</button>
				</div>
			</div>
		</div>
    );
  
}

export default Voting;