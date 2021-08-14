import React,{useEffect,useState} from "react";
import App1 from "./App1";
import App2 from "./App2";
import "./App.css";


const App=()=>{

	const [user,setUser]=useState([]);
	const [user1,setUser1]=useState([]);
	

	const myfun=async()=>{
		const resp= await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
		const data=await resp.json();
		console.log(data);
		setUser(data);
	}

	 const myfunLaunchYear=(launch)=>{
          const myfun1 = user.filter((ele)=>{
            return ele.launch_year===launch;
            	
            });
          setUser1(myfun1);
        
        }
        const mla=(lti)=>{
        	const myfu=user.filter((et)=>{
        		return et.launch_success.toString()===lti;
        	});
        	
        	setUser1(myfu);
        }

	return(

		<>
		<div>

		<div className="hh1">
		<h1>launch programs</h1>
		</div>
		<div className="con">
		
		<div className="con1">
             <App1 myfunLaunchYear={myfunLaunchYear} mla={mla}/>
        </div>
        <div className="con2">
              <App2 myfun={myfun} user={user} user1={user1}    />
         </div>

         </div>

         </div>
         </>

		);
}
export default App;
