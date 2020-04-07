import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";

import Round2 from "../Round2";


const Round1 = ({ pairsList, handleFormSubmit, pairsListR2, r1Status }) => {

  //for Round 1 
  const [inputFields, setInputFields] = useState(pairsList);
  //for Round 2 Re-Pair
  const [p1Temp, setp1Temp] = useState([]);
  const [p2Temp, setp2Temp] = useState([]);

  const [inputR2, setInputR2] = useState(pairsListR2);
  //
  const [saveState, setSave] = useState(1);
  const [submitState, setSubmit] = useState(1);


  //New Pair Sorting
  const combineArrays = () => {
    const arr = [];
    const arrP2 = [];
    inputFields.map((item, index) => {
      if (item.gamesWonP1 > item.gamesWonP2 && (arr.length + 1) <= 2) {
        arr.push({
          player1: item.player1,
          gamesWonP1: item.gamesWonP1,
          totalPointsP1: item.totalPointsP1,
          scoreP1: item.scoreP1,
          gamesPlayedP1: item.gamesPlayedP1,
        }); console.log("p1")
      } else if (item.gamesWonP1 > item.gamesWonP2 && (arr.length + 1) > 2) {
        arrP2.push({
          player2: item.player1,
          gamesWonP2: item.gamesWonP1,
          totalPointsP2: item.totalPointsP1,
          scoreP2: item.scoreP1,
          gamesPlayedP2: item.gamesPlayedP1,
        });
      } else {
      };

      if (item.gamesWonP2 > item.gamesWonP1 && (arrP2.length + 1) <= 2) {
        arrP2.push({
          player2: item.player2,
          gamesWonP2: item.gamesWonP2,
          totalPointsP2: item.totalPointsP2,
          scoreP2: item.scoreP2,
          gamesPlayedP2: item.gamesPlayedP2,
        }); console.log("p1")
      } else if (item.gamesWonP2 > item.gamesWonP1 && (arrP2.length + 1) > 2) {
        arr.push({
          player1: item.player2,
          gamesWonP1: item.gamesWonP2,
          totalPointsP1: item.totalPointsP2,
          scoreP1: item.scoreP2,
          gamesPlayedP1: item.gamesPlayedP2,
        });
      } else {
      };

    })

    //Setting of States
    setp1Temp(arr)
    setp2Temp(arrP2)


    const arrCom = [];
    arr.map((item, index) => {
      arrCom.push({
        // need to add both values incase player 1 is ina player 2 array visa versa
        player1: (item.player1),
        gamesWonP1: item.gamesWonP1,
        totalPointsP1: item.totalPointsP1,
        scoreP1: item.scoreP1,
        gamesPlayedP1: item.gamesPlayedP1,

        player2: arrP2[index].player2,
        gamesWonP2: arrP2[index].gamesWonP2,
        totalPointsP2: arrP2[index].totalPointsP2,
        scoreP2: arrP2[index].scoreP2,
        gamesPlayedP2: arrP2[index].gamesPlayedP2,
      });

    });

    setSave(saveState + 1)
    setInputR2(arrCom)

  }

  const handleInputChange = (index, event) => {
    const values = [...inputFields];

    const valuesp1 = [...p1Temp];
    const valuesp2 = [...p2Temp];

    //For handling Updating pairsList
    if (event.target.name === "player1") {
      values[index].scoreP1 = +(event.target.value);
    } else {
      values[index].scoreP2 = +(event.target.value);
    }

    if (values[index].scoreP1 > values[index].scoreP2) {
      values[index].gamesWonP1 = 1
    } else {
      values[index].gamesWonP1 = 0
    }

    if (values[index].scoreP2 > values[index].scoreP1) {
      values[index].gamesWonP2 = 1
    } else {
      values[index].gamesWonP2 = 0
    }

    values[index].gamesPlayedP1 = 1;
    values[index].gamesPlayedP2 = 1;

    setInputFields(values);

  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(inputFields, inputR2);
    setSubmit(submitState + 1)
    // console.log("inputFields", inputFields);
  };

  return (
    <>
      <h2 id="r1-title">Round 1 </h2>
      <div className="round1-cont">
        <form onSubmit={handleSubmit}>
          {pairsList.map((item, index) => (
            <Fragment key={`${item}~${index}`}>
              <div className="form-row-rounds">

                <div className="form-group col-sm-3">
                  <label htmlFor="player1">Player 1:{item.player1}</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="form-control"
                    id="player1"
                    name="player1"
                    value={item.scoreP1}
                    onChange={event => handleInputChange(index, event)}
                  />
                </div>


                <div className="form-group col-sm-3">
                  <label htmlFor="player2">Player 2:{item.player2}</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="form-control"
                    id="player2"
                    name="player2"
                    value={item.scoreP2}
                    onChange={event => handleInputChange(index, event)}
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
              onSubmit={handleSubmit}>
              Next Round
          </button> : null}
          </div>
          {/* <pre>
          {JSON.stringify(inputFields, null, 2)}
          <p>p1temp</p>
          {JSON.stringify(p1Temp, null, 2)}
          <p>p2temp</p>
          {JSON.stringify(p2Temp, null, 2)}
          <p>Combined Array</p>
          {JSON.stringify(inputR2, null, 2)}
          </pre> */}
        </form>
        <button class="sav-play-but" onClick={() => { combineArrays() }}>Save</button>
      </div>
      <br />
      {submitState % 2 === 0 ? <Round2 /> : null}

    </>
  );
};


export default Round1;
