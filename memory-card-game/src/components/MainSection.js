import React from 'react';
import {useState, useEffect} from 'react';

const MainSection = () => {
    const [imgSrc, setImgSrc] = useState([
        {poke1 : ['poke1.png', 'Charmeleon']},
        {poke2 : ['poke2.png', 'Bulbasaur']},
        {poke3 : ['poke3.1.png', 'Venusaur']},
        {poke4 : ['poke4.png', 'Squirtle']},
        {poke5 : ['poke5.png','Ivysaur']},
        {poke6 : ['poke6.png','Wartortle']},
        {poke7 : ['poke7.png','Charmander']},
        {poke8 : ['poke8.png','Blastoise']},
        {poke9 : ['poke9.png','Charizard']},
        {poke10 : ['poke10.png','Caterpie']},
        {poke11 : ['poke11.png','Metapod']},
        {poke12 : ['poke12.png','Butterfree']}
    ]);

    const cardHandler = (e) => {
        imgSrc.forEach((pokeObj, index, arr) => {

        });

        setImgSrc(
            imgSrc.forEach((pokeObj, index, arr) => {

            }) 
        );
    }

    return(
        <div className = "main-sec">
            <div className = "main-container">
                <div className = "row1">
                    <div onClick = {cardHandler} className = "card1">
                        <img src = {imgSrc[0].poke1[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[0].poke1[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card2">
                        <img src = {imgSrc[1].poke2[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[1].poke2[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card3">
                        <img src = {imgSrc[2].poke3[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[2].poke3[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card4">
                        <img src = {imgSrc[3].poke4[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[3].poke4[1]}</p>
                    </div>
                </div>

                <div className = "row2">
                    <div onClick = {cardHandler} className = "card5">
                        <img src = {imgSrc[4].poke5[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[4].poke5[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card6">
                        <img src = {imgSrc[5].poke6[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[5].poke6[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card7">
                        <img src = {imgSrc[6].poke7[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[6].poke7[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card8">
                        <img src = {imgSrc[7].poke8[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[7].poke8[1]}</p>
                    </div>
                </div>

                <div className = "row3">
                    <div onClick = {cardHandler} className = "card9">
                        <img src = {imgSrc[8].poke9[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[8].poke9[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card10">
                        <img src = {imgSrc[9].poke10[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[9].poke10[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card11">
                        <img src = {imgSrc[10].poke11[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[10].poke11[1]}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card12">
                        <img src = {imgSrc[11].poke12[0]} alt = "Pokemon Img" />
                        <p>{imgSrc[11].poke12[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;