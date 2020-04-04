import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

import PlayerForm from './PlayerForm'

import Pairing from "./Pairing";

import NameList from "./NameList";



const CreateGame = ({pairsList,player1List,player2List,count}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Create New Tournamnet</h2>
            <div className="gallery">
                <section >
                    <PlayerForm/>
                    <div>
                    {count <9 ? <NameList/>:null }  
                    </div>
                </section>
                <section>
                    {count <9 ? null: <Pairing/> }
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



