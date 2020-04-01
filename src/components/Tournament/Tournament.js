import React from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

import Round1 from "./Round1"



const Tournamnet = ({playersList}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Tournamnet Tracker</h2>
            <div className="gallery">
                <section >
                    <Round1/>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default Tournamnet;


 

