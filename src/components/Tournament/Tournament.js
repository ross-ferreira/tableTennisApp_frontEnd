import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

import Round1 from "./Round1";

import Round2 from './Round2';

import Round3 from './Round3';



const Tournamnet = ({playersList,handleClick}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Tournamnet Tracker</h2>
            
            <div className="gallery">
                <section >
                    <Round1/>
                    <Round2/>
                    <Round3/>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default Tournamnet;


 

