import React, { useState } from "react";


const PlayerForm = ({playerName,handleFormSubmit,handleClick,handleShuffleNames}) => {

    const [inputValueP1, setInputValueP1] = useState(playerName);
        
    const handleInputP1 = (e) => {
            setInputValueP1(e.currentTarget.value); 
        }

    const handleSubmit= (e) => {
            e.preventDefault();
            handleFormSubmit(inputValueP1);
        }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label for="player1name">Player Name</label>
                    <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
                </div>
                <button type="submit" class="btn btn-success">+</button>
            </form>
            <button onClick={handleClick} type="submit" class="btn btn-danger">-</button>
            <button onClick={handleShuffleNames} class="btn btn-info">Shuffle Names</button>
        </>
    );
}
export default PlayerForm;
