import React, { Fragment } from "react";
import { HashRouter as Router, Route, } from "react-router-dom";

import Value from "./components/Value"; 
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CreateGame from './components/CreateGame';




const App = () => ( 
  <React.Fragment>
    <Header/>
    <Router>
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route exact path="/create_game">
        <CreateGame/>
      </Route>
      <Route exact path="/tournament_page">
        <WelcomePage/>
      </Route>
      <Route exact path="/player_table">
        <WelcomePage/>
      </Route>
      <Route exact path="/league_table">
        <WelcomePage/>
      </Route>
    </Router>
  </React.Fragment>
);
export default App;

{/* <Value/>
<Buttons/> */}




