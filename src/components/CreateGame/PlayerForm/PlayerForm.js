import React, { useState } from "react";

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
            <form onSubmit={((maxPlayers) ? playerAdd ? handleSubmitP2:handleSubmitP1 :null) } >
                <div class="form-group">
                    <label for="player1name">Player Name (Enter 8 Players)</label>
                    <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
                    {maxPlayers?<p>Just Players {noPlayersNeed } Remaining</p>:<p>Good Job Buddy!!</p>}
                </div>
                <button type="submit" class="btn btn-success" onClick={shuffleState? handleShuffleNames:null} >+</button>
            </form>
            <button onClick={(minPlayers) ? playerAdd ? handleClickP1:handleClickP2 :null }  type="submit" class="btn btn-danger">-</button>
            {/* <button onClick={handleShuffleNames}  class="btn btn-info">Shuffle Names</button> */}
            <button onClick={handleClick}> {shuffleState ? 'ON' : 'OFF'} </button>
        </>
    );
}
export default PlayerForm;


