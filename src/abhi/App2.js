import React,{useEffect,useState} from "react";
import "./App.css"
const App2=()=>{
	const [user,setUser]=useState([]);
	const myfun=async()=>{
		const resp= await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
		const data=await resp.json();
		console.log(data);
		setUser(data);
	}
	useEffect(()=>{
		myfun()
	},[]);
	

	return(
        <>
        <div>
        <div className="ro">
        { 
          user.map((dat)=>{
          	return(

        <div className="row" key={dat.flight_number}>
        <div className="row1">
        <img src={dat.links.mission_patch} alt="flight" />
        </div>
        <div className="row2">
        <h3 className="hh3">{dat.mission_name} # {dat.flight_number}</h3>
        <p>launch year : {dat.launch_year}</p>
         <p>successful launch : {dat.is_tentative}</p>

        </div>

        </div>
           		);
          })
        }
        </div>
        </div>
		</>
		);
}
export default App2;
