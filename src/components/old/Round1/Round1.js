import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

const Round1 = ({pairsList,handleFormSubmit,scoreP1_1}) => {

    const [inputValueP2_1, setInputValueP2_1] = useState(pairsList[0].scoreP1);
    const [inputValueP1_1, setInputValueP1_1] = useState(pairsList[0].scoreP2);
    const [inputValueP1_2, setInputValueP1_2] = useState(pairsList[1].scoreP1);
    const [inputValueP2_2, setInputValueP2_2] = useState(pairsList[1].scoreP2);
    const [inputValueP1_3, setInputValueP1_3] = useState(pairsList[2].scoreP1);
    const [inputValueP2_3, setInputValueP2_3] = useState(pairsList[2].scoreP2);
    const [inputValueP1_4, setInputValueP1_4] = useState(pairsList[3].scoreP1);
    const [inputValueP2_4, setInputValueP2_4] = useState(pairsList[3].scoreP2);

    
    const InputP1_1 = (e) => {
        setInputValueP1_1(e.currentTarget.value); 
    }
    const InputP2_1 = (e) => {
        setInputValueP2_1(e.currentTarget.value); 
    }
    const InputP1_2 = (e) => {
        setInputValueP1_2(e.currentTarget.value); 
    }
    const InputP2_2 = (e) => {
        setInputValueP2_2(e.currentTarget.value); 
    }
    const InputP1_3 = (e) => {
        setInputValueP1_3(e.currentTarget.value); 
    }
    const InputP2_3 = (e) => {
        setInputValueP2_3(e.currentTarget.value); 
    }
    const InputP1_4 = (e) => {
        setInputValueP1_4(e.currentTarget.value); 
    }
    const InputP2_4 = (e) => {
        setInputValueP2_4(e.currentTarget.value); 
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        handleFormSubmit(inputValueP1_1,inputValueP2_1,
                            inputValueP1_2,inputValueP2_2,
                            inputValueP1_3,inputValueP2_3,
                            inputValueP1_4,inputValueP2_4);
    }

    return (
        <>
            {/* <HeaderGame /> */}
            <h2>Round 1==Provisional</h2>
            <div className="gallery">
                <section >
                <form onSubmit={handleSubmit} >
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Group</th>
                            <th scope="col">Player 1</th>
                            <th scope="col">Player Score</th>
                            <th scope="col"></th>
                            <th scope="col">Player 2</th>
                            <th scope="col">Player Score</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <th scope="row" key="1">1</th>
                                    <td key="1">{pairsList[0].player1}</td>
                                    <td key="1"><input 
                                            onChange={InputP1_1} 
                                            value={inputValueP1_1} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                    <th scope="row" key="1"> VS </th>
                                    <td key="1">{pairsList[0].player2}</td>
                                    <td key="1"><input 
                                            onChange={InputP2_1} 
                                            value={inputValueP2_1} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" key="2">1</th>
                                    <td key="2">{pairsList[1].player1}</td>
                                    <td key="2"><input 
                                            onChange={InputP1_2} 
                                            value={inputValueP1_2} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                    <th scope="row" key="2"> VS </th>
                                    <td key="2">{pairsList[1].player2}</td>
                                    <td key="2"><input 
                                            onChange={InputP2_2} 
                                            value={inputValueP2_2} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" key="3">1</th>
                                    <td key="3">{pairsList[2].player1}</td>
                                    <td key="3"><input 
                                            onChange={InputP1_3} 
                                            value={inputValueP1_3} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                    <th scope="row" key="3"> VS </th>
                                    <td key="3">{pairsList[2].player2}</td>
                                    <td key="3"><input 
                                            onChange={InputP2_3} 
                                            value={inputValueP2_3}  
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" key="4">1</th>
                                    <td key="4">{pairsList[3].player1}</td>
                                    <td key="4"><input 
                                            onChange={InputP1_4} 
                                            value={inputValueP1_4} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                    <th scope="row" key="4"> VS </th>
                                    <td key="4">{pairsList[3].player2}</td>
                                    <td key="4"><input 
                                            onChange={InputP2_4} 
                                            value={inputValueP2_4} 
                                            class="form-control" 
                                            id="player1score" 
                                            placeholder="Enter Score">
                                        </input>
                                    </td>
                                </tr>

                            </tbody>
                       
                    </table>
                    <button type="submit" class="btn btn-success">+</button>
                    </form>
                </section>
            </div>
            {/* <FooterGame /> */}
        </>
    );
}

export default Round1;


//
// const PlayerForm = ({playerName,handleFormSubmitP1,handleFormSubmitP2,handleClick,handleShuffleNames,playerAdd}) => {



//     return (
//         <>
//             <form onSubmit={handleSubmit} >
//                 <div class="form-group">
//                     <label for="player1name">Player Name</label>
//                     <input onChange={handleInputP1} value={inputValueP1} class="form-control" id="player1name" placeholder="Enter Name"></input>
//                 </div>
//                 <button type="submit" class="btn btn-success">+</button>
//             </form>
//             <button onClick={handleClick} type="submit" class="btn btn-danger">-</button>
//             <button onClick={handleShuffleNames} class="btn btn-info">Shuffle Names</button>
//         </>
//     );
// }
// export default PlayerForm;












{/* <tbody>
{pairsList.map((item,index,array) => (
    <tr>
        <th scope="row" key={ index }> {index +1} </th>
        <td key={ index }>
        {array[index].player1} 
        </td>
        <td key={ index }><input 
                // onChange={handleInputP1} 
                // value={inputValueP1} 
                class="form-control" 
                id="player1score" 
                placeholder="Enter Score">
            </input>
        </td>
        <th scope="row" key={ index }> VS </th>
        <td key={ index }>
        {array[index].player2}
        </td>
        <td key={ index }><input 
                // onChange={handleInputP2} 
                // value={inputValueP2} 
                class="form-control" 
                id="player2score" 
                placeholder="Enter Score">
            </input>
        </td> 
        

    </tr>
    ))
}
</tbody> */}