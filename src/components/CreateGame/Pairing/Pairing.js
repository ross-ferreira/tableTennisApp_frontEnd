import React from "react";

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const Pairing = ({playersList}) => {


    return (
        <>

            <h3>Pairing</h3>
            <div className="gallery">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Group</th>
                        <th scope="col">Player 1</th>
                        <th scope="col">Player 2</th>
                    </tr>
                    </thead>
                    <tbody>
                        {playersList.map((item, index) => (
                            <tr>
                                <th scope="row">{index +1}</th>

                                    <td key={ index }>
                                    {playersList[index].playerName } 
                                    </td>

                                    <td key={ index }>
                                    {playersList[(index)].playerName } 
                                    </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Pairing;


