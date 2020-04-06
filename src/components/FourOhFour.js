import React from "react";

import pug from '../images/pug_on_horse.jpeg'

const FourOhFour = () => {

    return (
        <>
            <picture className="fOf">
                <h3>HOWDY PARTNER!!</h3>
                <img 
                style={{width: 250, height: 250 }} 
                resizeMode="contain"
                src={pug} alt="pug"/>
                <h3>Wasnt expecting to see YOU Here</h3>
                <h3>!404!</h3>
            </picture>
            
        </>
    )
}
export default FourOhFour;