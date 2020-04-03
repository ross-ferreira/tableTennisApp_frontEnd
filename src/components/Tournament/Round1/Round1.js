import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";


const Round1 = ({ pairsList, handleFormSubmit, pairsListR2, r1Status }) => {

  const [inputFields, setInputFields] = useState(pairsList);
  
  //for Round 2
  const [p1Temp, setp1Temp] = useState([]);
  const [p2Temp, setp2Temp] = useState([]);

  const [inputR2, setInputR2] = useState(pairsListR2);

//New Pair Sorting
const combineArrays=() =>{
  const arr= [];
  const arrP2=[];
  inputFields.map((item,index)=>{
    if (item.gamesWonP1 > item.gamesWonP2 && (arr.length + 1) <= 2) {
      arr.push({
        player1: item.player1,
        gamesWonP1: item.gamesWonP1,
        totalPointsP1: item.totalPointsP1,
        scoreP1: item.scoreP1,
        gamesPlayedP1:item.gamesPlayedP1,
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
        gamesPlayedP2:item.gamesPlayedP2,
      }); console.log("p1")
    } else if (item.gamesWonP1 > item.gamesWonP2 && (arrP2.length + 1) > 2) {
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
  setp1Temp(arr)
  setp2Temp(arrP2)

  const arrCom=[];
  arr.map((item,index)=>{
    arrCom.push({
      // need to add both values incase player 1 is ina player 2 array visa versa
      player1: (item.player1),
      gamesWonP1: item.gamesWonP1,
      totalPointsP1: item.totalPointsP1,
      scoreP1: item.scoreP1,
      gamesPlayedP1:item.gamesPlayedP1,

      player2: arrP2[index].player2,
      gamesWonP2: arrP2[index].gamesWonP2,
      totalPointsP2: arrP2[index].totalPointsP2,
      scoreP2: arrP2[index].scoreP2,
      gamesPlayedP2: arrP2[index].gamesPlayedP2,
    });

  });

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

    console.log(p1Temp.length)
    console.log(p1Temp)

  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(inputFields,inputR2);
    // console.log("inputFields", inputFields);
  };

  return (
    <>
      <h2>Round 1 </h2>
      <form onSubmit={handleSubmit}>

        {pairsList.map((item, index) => (
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
                  onChange={event => handleInputChange(index, event)}
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
                  onChange={event => handleInputChange(index, event)}
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
          {JSON.stringify(inputFields, null, 2)}
          <p>p1temp</p>
          {JSON.stringify(p1Temp, null, 2)}
          <p>p2temp</p>
          {JSON.stringify(p2Temp, null, 2)}
          <p>Combined Array</p>
          {JSON.stringify(inputR2, null, 2)}
        </pre>
      </form>
      <button onClick={() => { combineArrays() }}>Save</button>

    </>
  );
};

// export default SideBySide;

export default Round1;

// const combineArrays=() =>{
//   const arr= [];
//   inputFields.map((item,index)=>{
//     arr.push([{
//       player1: item.player1 }])
// })
//   setInputR2(arr)

// }


// const combineArrays = () => ({ 
//   ...pairsListR2, 
//       pairsListR2: p1Temp.map((item,index) => {
//           const container = {};
//           container.player1= (p1Temp[index].player1);
//           container.gamesWonP1= (p1Temp[index].gamesWonP1);
//           container.totalPointsP1= (p1Temp[index].totalPointsP1);
//           container.scoreP1= (p1Temp[index].scoreP1);
//           container.gamesPlayedP1= (p1Temp[index].gamesPlayedP1);

//           container.player2= (p2Temp[index].player2);
//           container.gamesWonP2= (p2Temp[index].gamesWonP2);
//           container.totalPointsP2= (p2Temp[index].totalPointsP2);
//           container.scoreP2= (p2Temp[index].scoreP2);
//           container.gamesPlayedP2= (p2Temp[index].gamesPlayedP2);

//     return container;


// })}
// )

// const updateTemps=()=>{
//   inputFields.map((item,index)=>{

//    (item.gamesWonP1 > item.gamesWonP2 && p1Temp.length <= 2) ?  
//      p1Temp.push([{ player1: item.player1, 
//        gamesWonP1: item.gamesWonP1,
//        totalPointsP1:item.totalPointsP1,
//        scoreP1:item.scoreP1,
//        gamesPlayedP1:item.gamesPlayedP1, 
//      }]) : console.log("p1 outside")
//   }) 
//  }



{/* <tbody>
{pairsList.map((item,index,array) => (
    <tr>
        <th scope="row" key={ index }> {index +1} </th>
        <td key={ index }>
        {array[index].player1} 
        </td>
        <td key={ index }><input 
                // onChange={handleInputP1} 
                // value={inputValueP1} 
                class="form-control" 
                id="player1score" 
                placeholder="Enter Score">
            </input>
        </td>
        <th scope="row" key={ index }> VS </th>
        <td key={ index }>
        {array[index].player2}
        </td>
        <td key={ index }><input 
                // onChange={handleInputP2} 
                // value={inputValueP2} 
                class="form-control" 
                id="player2score" 
                placeholder="Enter Score">
            </input>
        </td> 
        

    </tr>
    ))
}
</tbody> */}



    // if (inputFields[index].gamesWonP1 > inputFields[index].gamesWonP2 && p1Temp.length <= 2 ) {
    //   p1Temp.push({ player1: inputFields[index].player1, 
    //     gamesWonP1: inputFields[index].gamesWonP1,
    //     totalPointsP1:inputFields[index].totalPointsP1,
    //     scoreP1:inputFields[index].scoreP1,
    //     gamesPlayedP1:inputFields[index].gamesPlayedP1, 
    //   });
    // } else if (inputFields[index].gamesWonP1 > inputFields[index].gamesWonP2 && p1Temp.length < 3){
    //   p2Temp.push({ player2: inputFields[index].player1, 
    //     gamesWonP2: inputFields[index].gamesWonP1,
    //     totalPointsP2:inputFields[index].totalPointsP1,
    //     scoreP2:inputFields[index].scoreP1,
    //     gamesPlayedP2:inputFields[index].gamesPlayedP1, 
    //   });
    // } else {
    //   console.log("no assingment")
    // }