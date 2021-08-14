import React,{useEffect,useState} from "react";
import "./App.css";

const App2=(props)=>{
	// const [user,setUser]=useState([]);
 //  const [user1,setUser1]=useState([]);

	useEffect(()=>{
		props.myfun()
	},[]);
	

	return(
        <>
        <div>
        <div className="ro">
        { 
       
          props.user1.map((dat)=>{
            console.log(dat);
          	return(

        <div className="row" key={dat.flight_number}>
        <div className="row1">
        <img src={dat.links.mission_patch} alt="flight" />
        </div>
        <div className="row2">
        <h3 className="hh3">{dat.mission_name} # {dat.flight_number}</h3>
        <p>launch year : {dat.launch_year}</p>
         <p>successful launch : {(dat.launch_success).toString()}</p>

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
