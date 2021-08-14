import React from "react";
import App1 from "./App1"
import App2 from "./App2"
import "./App.css"


const App=()=>{
	return(
		<>
		<div>

		<div className="hh1">
		<h1>launch programs</h1>
		</div>
		<div className="con">
		
		<div className="con1">
             <App1/>
        </div>
        <div className="con2">
              <App2/>
         </div>

         </div>

         </div>
         </>

		);
}
export default App;