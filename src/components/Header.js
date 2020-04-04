import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
// import { Container, Navbar } from 'react-bootstrap';



class Header extends Component {

    render() {

        return (
            <>
            <Router>
                <header className="main-header">
                    <div class="container-tv">
                    <div class="tvLabel">
                        <h1 class="tv-label-heading">Prosecco Pong</h1>
                        <h7 class="tv-label-heading">Keep Em Balls Clean</h7>
                    </div>
                    </div>
                    <div>
                    <nav class="nav-container">
                        <Link>
                        <div class="navButton">
                            New Game
                        </div>
                        </Link>
                        <Link exact path="/tournament_page">
                        <div class="navButton">
                            Current Game
                        </div>
                        </Link>
                        <Link exact path="/rules">
                        <div class="navButton">
                            Rules
                        </div>
                        </Link>
                    </nav>
                    </div>
                </header>
                </Router>
            </>
        );
    }
}
export default Header;