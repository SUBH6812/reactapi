import React from "react";
import Manu from "./comp/Manu";
import Home from "./comp/Home";
import About from "./comp/About";
import Service from "./comp/Service";
import './comp/App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
    <Manu />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    </Switch>
   
    </div>
    </BrowserRouter>
    </>
   
  );
}

export default App;
