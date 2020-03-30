import React, { Fragment } from "react";
import { HashRouter as Router, Route, } from "react-router-dom";

import Value from "./components/Value"; 
import Buttons from "./components/Buttons";




const App = () => ( 
  <React.Fragment>
    <Router>
      <Route exact path="/">
        <h1>iCounter</h1>
        <Value/>
        <Buttons/>
      </Route>
    </Router>
  </React.Fragment>
);
export default App;




