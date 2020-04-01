import React from "react";

import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';



const PairingP2 = ({playersList}) => {


    return (
        <>
            <div className="gallery">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Group</th>
                        <th scope="col">Player 2</th>
                    </tr>
                    </thead>
                    <tbody>
                        {playersList.map((item,index,array) => (
                        (index % 2===0) ? null:
                            <tr>
                                <th scope="row"> <img/> </th>
                                <td key={ index }>
                                {array[index].playerName} 
                                </td>

                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default PairingP2;

// .map(function(entry, index, array) {
//     return (index % 2 === 1) ? null : {
//       value: array[index + 1],
//       index: entry
//     };


// const list=(index,playersList)=>{
//     for (let i = (index); i< playersList.length; i++ ){ return(
//         <tr>
//             <th scope="row">{i +1 }</th>

//             <td key={ i }>
//             {playersList[(i)].playerName} 
//             </td>
            
//             <td key={ i }>
//             {playersList[ (i + 1) ].playerName} 
//             </td>

//         </tr>)
//     }
// }





