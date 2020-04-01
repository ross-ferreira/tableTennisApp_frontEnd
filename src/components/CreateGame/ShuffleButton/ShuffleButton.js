import React from "react";

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const ShuffleButton = ({handleClick}) => {


    return (
        <>
            <Button onClick={handleClick} variant="info">Shuffle Names</Button>
        </>
    );
}

export default ShuffleButton;






