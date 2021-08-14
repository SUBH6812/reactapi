import React from "react";
import {Link} from "react-router-dom"
const Manu=()=>{
	return(
		<>
		<div>
		<ul>
		<li><Link to="/">home</Link></li>
		<li><Link to="About">about</Link></li>
		<li><Link to="Service">services</Link></li>
		</ul>
		</div>
		</>
		);

}
export default Manu;