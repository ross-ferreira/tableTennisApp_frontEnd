import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

import PlayerForm from './PlayerForm'

import Pairing from "./Pairing";

import NameList from "./NameList";



const CreateGame = ({pairsList,player1List,player2List,count}) => {

    return (
        <>
            <h2>Create New Tournamnet</h2>
            <div className="player-entry">
                <div class="player-form">
                    <PlayerForm/>
                </div>
                <div class="player-list">
                    <div> 
                        {count <9 ? <NameList/>:null } 
                    </div>
                </div>
                <div class="player-pairing">
                    {count <9 ? null: <Pairing/> }
                </div>
            </div>
        </>
    );
}

export default CreateGame;



