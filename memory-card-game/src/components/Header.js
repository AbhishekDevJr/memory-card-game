import React from 'react';
import {useState, useEffect} from 'react';

const Header = () => {
    return(
        <header className = "header-cont">
            <div className = "header-row1">
                <img src = "pokemon-logo.png" alt = "Main Logo" />
            </div>
            <div className = "black-strip">
                <div className = "pokeball-outer1">
                    <div className = "pokeball-inner1"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;