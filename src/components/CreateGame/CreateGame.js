import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

import PlayerForm from './PlayerForm'

import Pairing from "./Pairing";


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
                <Pairing/>
                <Link to="/tournament_page">
                    <button>Submit Players</button>
                </Link>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default CreateGame;


 

