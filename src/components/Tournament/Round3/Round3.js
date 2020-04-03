import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";


const Round3 = ({ handleFormSubmitR3, r1Status,pairsListR3,}) => {

  //Get Data for Round 2
  const [inputFieldsR3, setInputFieldsR3] = useState(pairsListR3);
  
  //for Round 3
  const [inputWinner, setWinner] = useState([]);


const combineArrays=() =>{
  const arr= [];
  inputFieldsR3.map((item,index)=>{
    if (item.gamesWonP1 > item.gamesWonP2) {
      arr.push({
        player1: item.player1,
        gamesWonP1: item.gamesWonP1,
        totalPointsP1: item.totalPointsP1,
        scoreP1: item.scoreP1,
        gamesPlayedP1:item.gamesPlayedP1,
      }); console.log("p1")
    } else {
      arr.push({
        player2: item.player1,
        gamesWonP2: item.gamesWonP1,
        totalPointsP2: item.totalPointsP1,
        scoreP2: item.scoreP1,
        gamesPlayedP2: item.gamesPlayedP1,
      });
    }
    })
    setWinner(arr)
}

  const handleInputChangeR3 = (index, event) => {
    const values = [...pairsListR3];

    //For handling Updating pairsList
    if (event.target.name === "player1") {
      values[index].scoreP1 = +(event.target.value);
    } else {
      values[index].scoreP2 = +(event.target.value);
    }

    if (values[index].scoreP1 > values[index].scoreP2) {
      values[index].gamesWonP1 = 3
    } else {
      values[index].gamesWonP1 = 2
    }

    if (values[index].scoreP2 > values[index].scoreP1) {
      values[index].gamesWonP2 = 3
    } else {
      values[index].gamesWonP2 = 2
    }

    values[index].gamesPlayedP1 = 3;
    values[index].gamesPlayedP2 = 3;

    setInputFieldsR3(values);

  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmitR3(inputFieldsR3,inputWinner);
    // console.log("inputFields", inputFields);
  };

  return (
    <>
      <h2>Round 3 </h2>
      <form onSubmit={handleSubmit}>

        {pairsListR3.map((item, index) => (
          <Fragment key={`${item}~${index}`}>
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label htmlFor="player1">{item.player1}</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="form-control"
                  id="player1"
                  name="player1"
                  value={item.scoreP1}
                  onChange={event => handleInputChangeR3(index, event)}
                />
              </div>


              <div className="form-group col-sm-4">
                <label htmlFor="player2">{item.player2}</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="form-control"
                  id="player2"
                  name="player2"
                  value={item.scoreP2}
                  onChange={event => handleInputChangeR3(index, event)}
                />
              </div>
            </div>
          </Fragment>
        ))
        }
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Next Round
          </button>
        </div>
        <br />
        <pre>
          {JSON.stringify(inputFieldsR3, null, 2)}
          <p>Winner</p>
          {JSON.stringify(inputWinner, null, 2)}
        </pre>
      </form>
      <button onClick={() => { combineArrays() }}>Save</button>

    </>
  );
};


export default Round3;
