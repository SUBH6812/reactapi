import React from "react";
// import "./Ap.css"

const App1=(props)=>{
const year=['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
const success=['true','false'];
	return(
		<>
		<div>
		<div className="btn">
		<div className="hh2">
		<h2>filters</h2>
		</div>
		<div className="hh4">
		<h4>launch year</h4>
		<div className="lin"></div>
		</div>
		<ul>
			{year.map((ldate,ind)=>
				
				<li onClick={()=>props.myfunLaunchYear(ldate)} key={ind}>{ldate}</li>
			)}
			
		</ul>
		<div className="hh4">
		<h4>successful launch</h4>
		<div className="lin"></div>
		</div>
		<ul>
		{success.map((ev,id)=>{
			return(
		<li onClick={()=>props.mla(ev.toString())} key={id}>{ev.toString()}</li>);
		})
	}
		
        </ul>
        <div className="hh4">
		<h4>successful landing</h4>
		<div className="lin"></div>
		</div>
		<ul>
		<li>True</li>
		<li>False</li>
        </ul>
		</div>
		</div>
		</>

		);
}
export default App1;