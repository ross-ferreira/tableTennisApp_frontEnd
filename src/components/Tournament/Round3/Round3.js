import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";


const Round3 = ({ handleFormSubmitR3, r1Status, pairsListR3, }) => {

  //Get Data for Round 2
  const [inputFieldsR3, setInputFieldsR3] = useState(pairsListR3);

  //for Round 3
  const [inputWinner, setWinner] = useState([]);

  //FOR WINNER POPUP
  const [saveState, setSave] = useState(1);
  const [subState, setSubmit] = useState(1);




  const combineArrays = () => {
    const arr = [];
    inputFieldsR3.map((item, index) => {
      if (item.gamesWonP1 > item.gamesWonP2) {
        arr.push({
          player1: item.player1,
          gamesWonP1: item.gamesWonP1,
          totalPointsP1: item.totalPointsP1,
          scoreP1: item.scoreP1,
          gamesPlayedP1: item.gamesPlayedP1,
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
    setSave(saveState + 1)
    // setSubmit(subState + 1)
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
    handleFormSubmitR3(inputFieldsR3, inputWinner);
    
    // console.log("inputFields", inputFields);
  };

  return (
    <>
      <h2>Round 3 </h2>
      <form onSubmit={handleSubmit}>
        <div className="round1-cont">
          {pairsListR3.map((item, index) => (
            <Fragment key={`${item}~${index}`}>
              <div className="form-row-rounds">
                <div className="form-group col-sm-6">
                  <label htmlFor="player1">Player 1:{item.player1}</label>
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
                  <label htmlFor="player2">Player 2:{item.player2}</label>
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
            {saveState % 2 === 0 ? <button
              className="submit-play-but"
              type="submit"
              onSubmit={handleSubmit}
            >
              Ive got a Winner Feeling
          </button> : null}
          </div>
          {/* <pre>
          {JSON.stringify(inputFieldsR3, null, 2)}
          <p>Winner</p>
          {JSON.stringify(inputWinner, null, 2)}
        </pre> */}
        </div>
      </form>
      <button class="sav-play-but" onClick={() => { combineArrays() }}>Save</button>
      {saveState % 2 === 0 ? (
      <div className="winner-popup"> 
      <img src="https://media.giphy.com/media/hogmFYXmaAa8CLWsoy/giphy.gif"/>
      <h2>Well Done {inputWinner.player1}{inputWinner.player2}</h2>
      </div>
      ) : console.log("end of game")
      }

    </>
  );
};


export default Round3;
