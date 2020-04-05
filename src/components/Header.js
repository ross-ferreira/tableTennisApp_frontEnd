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
                            <h1 class="tv-label-heading1">Prosecco Pong</h1>
                            <h7 class="tv-label-heading2">Keep Em Balls Clean</h7>
                        </div>
                    </div>
                    <div class="nav-container">
                        <nav>
                            <Link>
                                <button class="navButton">
                                    NEW GAME
                                </button>
                            </Link>
                            <Link exact path="/tournament_page">
                                <button class="navButton">
                                    CURRENT GAME
                                </button>
                            </Link>
                            <Link exact path="/rules">
                                <button class="navButton">
                                    THE RULES
                                </button>
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