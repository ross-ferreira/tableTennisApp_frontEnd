import React from "react";
import { Link } from "react-router-dom";



const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <figure class="welcome-image"> 
                <img src={require('./beerCup.jpg')}/>
            </figure>
            <div class="welcome-image-r">
                <img src={require('./pingpongking.jpg')} className="pong-king"/>
                <p id="title-welcome-card">
                    You have Made it!
                </p>

                <p>
                    Firstly, add all players for an 8 player match
                </p>
                <p>
                    Then input the Scores for each Round (Max:10)
                </p>
                <p>
                    Then Boom! You will be able to crown a Prosecco King or Queen
                </p>
                <Link to="/create_game">
                    <button class="enter-button" type="button" >Enter</button>
                </Link>
            </div>
            <figure class="welcome-image"> 
                <img src={ require('./cupArrangement.jpg')}/>
            </figure>
        </div>
    )
}

export default WelcomePage;