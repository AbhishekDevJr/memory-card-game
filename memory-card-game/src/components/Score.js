import React from 'react';
import {useState, useEffect} from 'react';

const Score = (props) => {
    //Receives scores as props sents as state variables from MainSection Component via Parent Component of both.
    return(
        <div className = "score">
            <div className = "container">
                <div className = "cScore">Current Score: {props.testCurrScore}</div>
                <div className = "bScore">Best Score: {props.testBestScore}</div>
            </div>
        </div>
    );
}

export default Score;