import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Link } from "react-router-dom";
import "../App.css";

import ElectionContractBuild from './Election.json';
import { useUserContext } from "../context/user_context";
const YOUR_CONTRACT_ADDRESS = "0xDC76cF4548876ABdFdEBEDf0bAC63e08FF5Ee563";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");



const Result = () => {
    const {id, setId} = useUserContext();
    const [vc1, setvc1] = useState(1); 
    const [vc2, setvc2] = useState(0);
    const [vc3, setvc3] = useState(0);
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
        // <>
        //     <h1>Hello the vote is given to {id} </h1>
        //     <button onClick={()=>{
        //         setId(id+1);
        //     }}>check id</button>
        // </>
        
        <div>
			<nav className="navbar">
				<h1 className="db-welcome">Welcome</h1>
				<div>
					<Link to="/" className="logout btn">
						Logout
					</Link>
				</div>
			</nav>

			<div className="result-content">
				<h1 className="result-heading">Delhi MCD Elections</h1>
				<table className="result-table">
					<tr>
						<th>Party</th>
						<th>Vote Count</th>
					</tr>
					<tr>
						<td>AAP</td>
						<td>{vc1}</td>
					</tr>
					<tr>
						<td>BJP</td>
						<td>{vc2}</td>
					</tr>
					<tr>
						<td>Congress</td>
						<td>{vc3}</td>
					</tr>
				</table>
			</div>
		</div>

        
    )

}

export default Result;