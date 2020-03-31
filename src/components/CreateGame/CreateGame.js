import React from "react";
// import FooterGame from "../FooterGame";
// import HeaderGame from "../HeaderGame";
import { Link } from 'react-router-dom';


const CreateGame = ({ handleIncrement, srcImage, style, counter }) => {


    return (
        <>
            {/* <HeaderGame /> */}

            <div className="gallery">
                <section >
                    <figure className="photo">

                        <picture className="img-container">
                            <img src={srcImage} alt="stockimage" />
                        </picture>
                        {counter === 10 ? <Link to="/scores">
                            <div
                                style={style}
                                className="hidden-div"
                            >
                            </div>
                        </Link> : <div
                            onClick={handleIncrement}
                            style={style}
                            className="hidden-div"
                        >
                            </div>}
                    </figure>

                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default CreateGame;