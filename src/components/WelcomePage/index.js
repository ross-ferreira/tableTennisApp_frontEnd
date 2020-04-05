import React from "react";

import { Link } from "react-router-dom";


const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <figure class="welcome-image"> 
                <img src="../../../images/beerCup.jpg"/>
            </figure>
            <div class="welcome-image-r">
                <img src="../../../images/pingpongking.jpg"/>
                <p class="title-welcome-card">
                    The Worlds First Prosecco Tournament App
                </p>

                <p>
                    Firstly, add all players for an 8 player match
                </p>
                <p>
                    Then input the Scores for each Round
                </p>
                <p>
                    Then Boom! You will be able to crown a Prosecco King or Queen
                </p>
                <Link to="/create_game">
                    <button class="enter-button" type="button" >Enter</button>
                </Link>
            </div>
            <figure class="welcome-image"> 
                <img src="../../../images/cupArrangement.jpg"/>
            </figure>
        </div>
    )
}

export default WelcomePage;