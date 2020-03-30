import React from "react";
import Value from "./components/Value"; 
import Buttons from "./components/Buttons";




const App = ({count,handleIncrement,handleDecrement,handleReset,value}) => ( 
  <React.Fragment>
    <h1>iCounter</h1>
    <Value/>
    <Buttons
    />
  </React.Fragment>
);
export default App;

