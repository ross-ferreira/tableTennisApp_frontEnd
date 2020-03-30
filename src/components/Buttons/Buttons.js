import React from "react";


const Buttons = ({ handleIncrement,handleDecrement, handleReset,}) => ( 
    <div>
        <button
        onClick={ handleIncrement } className="btn btn-primary"
        >+</button>
        <button
        onClick={ handleDecrement } className="btn btn-primary"
        >-</button>
        <button
        onClick={ handleReset } className="btn btn-danger"
        >Reset</button>
  </div>
);
export default Buttons;