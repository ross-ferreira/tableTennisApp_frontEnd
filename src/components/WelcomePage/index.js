import React from "react";

import { Link } from "react-router-dom";


const WelcomePage = () => {

    return (
        <div className="footer-div">
            <Link to="/create_game">
                <button type="button" >Enter</button>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81NU1FFycyL._SY450_.jpg"/>
            </Link>
        </div>
    )
}

export default WelcomePage;