import React from "react";

import { Form, Col, Button } from 'react-bootstrap';

import Round1 from "./Round1";

const Tournamnet = ({playersList,handleClick}) => {


    return (
        <>
            {/* <HeaderGame /> */}
            <h2 id="tt-title">Tournamnet Tracker</h2>
            
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


 

