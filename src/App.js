import React, { Fragment } from "react";
import { HashRouter as Router, Route, } from "react-router-dom";

import Value from "./components/Value"; 
import Buttons from "./components/Buttons";
import Header from "./components/Header"
import WelcomePage from './components/WelcomePage'




const App = () => ( 
  <React.Fragment>
    <Header/>
    <Router>
      <Route exact path="/">
        <WelcomePage/>
      </Route>
    </Router>
  </React.Fragment>
);
export default App;

{/* <Value/>
<Buttons/> */}




