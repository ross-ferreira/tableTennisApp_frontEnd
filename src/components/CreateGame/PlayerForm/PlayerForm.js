import React, { useState } from "react";
import { Link } from 'react-router-dom';

import NameList from "../NameList"

const PlayerForm = ({
    addName,
    count,
    noPlayersNeed,
    maxPlayers,
    minPlayers,
    playerName,
    handleFormSubmitP1,
    handleFormSubmitP2,
    handleClickP1,
    handleClickP2,
    handleShuffleNames,
    playerAdd,
    player1List, }) => {

    const [inputValueP1, setInputValueP1] = useState(player1List);

    const [shuffleState, setShuffleState] = useState(false);
        
    const handleInputP1 = (e) => {
            setInputValueP1(e.currentTarget.value); 
        }

    const handleSubmitP1= (e) => {
            e.preventDefault();
            handleFormSubmitP1(inputValueP1);
        }
    const handleSubmitP2= (e) => {
            e.preventDefault();
            handleFormSubmitP2(inputValueP1);
        }
    
    const handleClick =() => {
        setShuffleState(!shuffleState)
    }


    return (
        <>
        <div class="player-form-cont">
            <form class="player-form" onSubmit={((maxPlayers) ? playerAdd ? handleSubmitP2:handleSubmitP1 :null) } >
                <div class="form-group-add">
                    <label for="player1name">Player Name (Enter 8 Players)</label>
                    <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
                    {maxPlayers?<p>Just {noPlayersNeed } Players Remaining</p>:<p>Good Job Buddy!!</p>}
                </div>
                <div class="add-play-div" >
                    <button class="add-play-but" type="submit" onClick={shuffleState? handleShuffleNames:null} > + </button>
                </div>            
            </form>
            <div class="control-panel">
                <button class="rem-play-but" onClick={(minPlayers) ? playerAdd ? handleClickP1:handleClickP2 :null }  type="submit" > - </button>
                <button class="shuf-play-but" onClick={handleClick}> {shuffleState ? 'SHUFFLE ON' : 'SHUFFLE OFF'} </button>
                <Link to="/tournament_page">
                    <button class="submit-play-but">SUBMIT PLAYERS</button>
                </Link>
            </div>
        </div>
        </>
    );
}
export default PlayerForm;


