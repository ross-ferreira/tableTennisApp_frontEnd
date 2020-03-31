import React from "react";
import PlayerForm from './PlayerForm'

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';


const CreateGame = () => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Create New Tournamnet</h2>
            <div className="gallery">
                <section >
                    <PlayerForm/>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default CreateGame;
