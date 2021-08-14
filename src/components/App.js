import React from 'react';
// import './App.css';
import Home from "./Home";
import About from "./About";
import Navbar from './Navbar';
import {Route,Switch} from "react-router-dom";

const App=()=>{
	return(
		
		
		
		<div>
		<Navbar/>
		<Switch>
		<Route path="/home" component={Home}/>
		<Route path="/about" Component={About}/>
		</Switch>
         // <Home />
		// <About />
		</div>
		
 
		
		);
        

}
export default App;
