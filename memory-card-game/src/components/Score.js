import React from 'react';
import {useState, useEffect} from 'react';

const Score = () => {
    return(
        <div className = "score">
            <div className = "container">
                <div className = "cScore">Current Score: 0</div>
                <div className = "bScore">Best Score: 0</div>
            </div>
        </div>
    );
}

export default Score;