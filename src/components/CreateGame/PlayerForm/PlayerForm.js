import React, { useState } from "react";


const PlayerForm = ({
    addName,
    maxPlayers,
    minPlayers,
    playerName,
    handleFormSubmitP1,
    handleFormSubmitP2,
    handleClickP1,
    handleClickP2,
    handleShuffleNames,
    playerAdd}) => {

    const [inputValueP1, setInputValueP1] = useState(playerName);
        
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

    return (
        <>
            <form onSubmit={((maxPlayers) ? playerAdd ? handleSubmitP2:handleSubmitP1 :null) } >
                <div class="form-group">
                    <label for="player1name">Player Name</label>
                    <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
                </div>
                <button type="submit" class="btn btn-success">+</button>
            </form>
            <button onClick={(minPlayers) ? playerAdd ? handleClickP1:handleClickP2 :null } type="submit" class="btn btn-danger">-</button>
            <button onClick={handleShuffleNames} class="btn btn-info">Shuffle Names</button>
        </>
    );
}
export default PlayerForm;

// { (maxPlayer) ? null : handleIncrement }


// playerAdd ? handleSubmitP2:handleSubmitP1
