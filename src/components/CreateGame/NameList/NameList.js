import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const NameList = ({pairsList,player1List,player2List}) => {


    return (
        <>

                <section >
                    <div>
                        <table class="table">
                            <thead>
                            </thead>
                            <tbody>
                                {player1List.map((item,index,array) => (
                                    <tr>
                                        <td>
                                        {item.playerName}
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <table class="table">
                            <thead>
                            </thead>
                            <tbody>
                                {player2List.map((item,index,array) => (
                                    <tr>
                                        <td>
                                        {item.playerName}
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                </>
    )

}

export default NameList;
