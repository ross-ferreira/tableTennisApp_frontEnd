import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import ReactDOM from "react-dom";

const Round1 = ({pairsList,handleFormSubmit}) => {
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
    const [inputFields, setInputFields] = useState(pairsList);

//   const [inputFields, setInputFields] = useState([ { firstName: '', lastName: '' }]);

//   const handleAddFields = () => {
//     const values = [...inputFields];

//     values.push({ firstName: '', lastName: '' });

//     setInputFields(values);
//   };

    const handleInputChange = (index, event) => {
    const values = [...inputFields];

    if (event.target.name === "player1") {
      values[index].scoreP1 = event.target.value;
    } else {
      values[index].scoreP2 = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(inputFields);
    console.log("inputFields", inputFields);
  };

  return (
    <>      
      <form onSubmit={handleSubmit}>
        
          {pairsList.map((item, index) => (
            <Fragment key={`${item}~${index}`}>
              <div className="form-row">
              <div className="form-group col-sm-6">
          <label htmlFor="player1">{item.player1}</label>
                <input
                  type="text"
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
                  type="text" 
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