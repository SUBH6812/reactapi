import React,{useState,useEffect} from "react";
const App1=()=>{
	const [user,setUser]=useState([]);
	const fun=async ()=>{   
	const resp = await fetch("https://api.github.com/users");
	setUser(await resp.json());
	
}


	useEffect(()=>{
		fun();
	},[]);

	return(
		<>
		<div className="main">
		<div className="main1">
		{

			user.map((dat)=>{
				return(
		
		<div className="con" key={dat.id}>
		<div>
		<div className="con1"><img src={dat.avatar_url} alt="1"/></div>
		<div className="con2"></div>
		<div>
		<div className="con3">{dat.login}</div>
		</div>
		
		
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
export default App1;