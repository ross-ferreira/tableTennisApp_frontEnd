import React from "react";
import PlayerForm from './PlayerForm'

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';


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
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default CreateGame;

