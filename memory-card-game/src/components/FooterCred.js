import React from 'react';
import {useState, useEffect} from 'react';

function FooterCred(){
    return(
        <footer className = "contacts">
            <div className = "social-container">
                <div className = "social-links">
                    <p>Built by Abhishek Choudhari</p>
                    <a href = "https://github.com/AbhishekDevJr" target = "_blank"><img src = "icons8-github-48.png" alt = "GitHub Icon" /></a>
                    <a href = "https://www.linkedin.com/in/abhishek-choudhari-408526173/" target = "_blank"><img src = "icons8-linkedin-circled-50.png" alt = "LinkedIn Icon" /></a>
                </div>
            </div>
        </footer>
    );
}

export default FooterCred;