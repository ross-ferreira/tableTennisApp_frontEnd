import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const NameList = ({pairsList,player1List,player2List}) => {


    return (
        <>
                <section class="cup" >
                    <div>
                        <div>
                            {player1List.map((item,index,array) => (
                                <div class="fluid">
                                    {item.playerName}
                                </div>
                                ))
                            }
                        </div>
                        <div>
                            {player2List.map((item,index,array) => (
                                <div class="fluid">
                                    {item.playerName}
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                </>
    )

}

export default NameList;

