import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";

const Round1 = ({pairsList,handleFormSubmit,pairsListR2}) => {
// player1
// gamesWonP1
// totalPointsP1
// scoreP1
// gamesPlayedP1

// player2
// gamesWonP2
// totalPointsP2
// scoreP2
// gamesPlayedP2

// const handleAddFields = () => {
//   const values = [...inputFields];
//   values.push({ firstName: "", lastName: "" });
//   setInputFields(values);
// };



    const [inputFields, setInputFields] = useState(pairsList);
    const [inputR2, setInputR2] = useState(pairsListR2);

    const handleInputChange = (index, event) => {
    const values = [...inputFields];
    const p1Temp = [];
    const p2Temp = [];
    const valuesR2 = inputR2;
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

//For creating Finding Winners and Updating pairsListR2

    //Updating p1Temp

  if (values[index].gamesWonP1 > values[index].gamesWonP2 && p1Temp.length <= 2) {
    p1Temp.push({ player1: values[index].player1, 
      gamesWonP1: values[index].gamesWonP1,
      totalPointsP1:values[index].totalPointsP1,
      scoreP1:values[index].scoreP1,
      gamesPlayedP1:values[index].gamesPlayedP1, 
    });
  } else {
    p2Temp.push({ player2: values[index].player1, 
      gamesWonP2: values[index].gamesWonP1,
      totalPointsP2:values[index].totalPointsP1,
      scoreP2:values[index].scoreP1,
      gamesPlayedP2:values[index].gamesPlayedP1, 
    });
  }
    //Updating p2Temp
    if (values[index].gamesWonP2 > values[index].gamesWonP1 && p2Temp.length <= 2) {
      p2Temp.push({ player2: values[index].player2, 
        gamesWonP2: values[index].gamesWonP2,
        totalPointsP2:values[index].totalPointsP2,
        scoreP2:values[index].scoreP2,
        gamesPlayedP2:values[index].gamesPlayedP2, 
      });
    } else {
      p1Temp.push({ player1: values[index].player2, 
        gamesWonP1: values[index].gamesWonP2,
        totalPointsP1:values[index].totalPointsP2,
        scoreP1:values[index].scoreP2,
        gamesPlayedP1:values[index].gamesPlayedP2, 
      });
    }
// console.log(JSON.stringify(p1Temp, null, 2))
// console.log(JSON.stringify(p2Temp, null, 2))

console.log(p1Temp)
console.log(p2Temp)
console.log(p1Temp.length)







  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(inputFields);
    console.log("inputFields", inputFields);
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
            Save
          </button>
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
    </>
  );
};

export default Round1;






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