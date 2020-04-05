import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const PairingP1 = ({pairsList}) => {
    
    return (
        <>

            <div className="gallery">
                <table class="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Group</th>
                        <th scope="col">Player 1</th>
                        <th scope="col"></th>
                        <th scope="col">Player 2</th>
                    </tr>
                    </thead>
                    <tbody>
                        {pairsList.map((item,index,array) => (
                            <tr>
                                <th scope="row"> {index +1} </th>
                                <td key={ index }>
                                {array[index].player1} 
                                </td>
                                <th scope="row"> VS </th>
                                <td key={ index }>
                                {array[index].player2} 
                                </td>

                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default PairingP1;






