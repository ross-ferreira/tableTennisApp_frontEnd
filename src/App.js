import React, { Fragment } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";

import FourOhFour from "./components/FourOhFour"
import Value from "./components/old/Value"; 
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CreateGame from './components/CreateGame';
import Tournamnet from "./components/Tournament";
import Footer from "./components/Footer";
import Rules from './components/Rules';
import history from "../src/history";




const App = () => ( 
  <React.Fragment>
    
    <Router history={ history }>
    <Header/>
    <Switch>
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route exact path="/create_game">
        <CreateGame/>
      </Route>
      <Route exact path="/tournament_page">
        <Tournamnet/>
      </Route>
      <Route exact path="/player_table">
        <WelcomePage/>
      </Route>
      <Route exact path="/league_table">
        <WelcomePage/>
      </Route>
      <Route exact path="/rules">
        <Rules/>
      </Route>
      <FourOhFour/>
      </Switch>
    </Router>
    <Footer/>

  </React.Fragment>
);
export default App;

{/* <Value/>
<Buttons/> */}




