import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

const Round1 = ({pairsList}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Round 1==Provisional</h2>
            <div className="gallery">
                <section >
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Group</th>
                            <th scope="col">Player 1</th>
                            <th scope="col">Player Score</th>
                            <th scope="col"></th>
                            <th scope="col">Player 2</th>
                            <th scope="col">Player Score</th>
                        </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default Round1;