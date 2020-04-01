import React from "react";
import PlayerForm from './PlayerForm'

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import PairingP1 from "./PairingP1";
import PairingP2 from "./PairingP2";
import ShuffleButton from "./ShuffleButton";


const CreateGame = ({playersList}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Create New Tournamnet</h2>
            <div className="gallery">
                <section >
                    <PlayerForm/>
                    <ul>
                        {playersList.map((item, index) => (
                            <li className="page-item" key={ index }> {item.playerName}
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                {((playersList.length ) > 2 && ((playersList.length ) % 2 === 0) ) ? <PairingP1/> : null }
                {((playersList.length ) > 2 && ((playersList.length ) % 2 === 0) ) ? <PairingP2/> : null } 
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default CreateGame;


 

