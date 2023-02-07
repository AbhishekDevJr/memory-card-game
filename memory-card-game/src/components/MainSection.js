import React from 'react';
import {useState, useEffect} from 'react';

const MainSection = () => {
    const [imgSrc, setImgSrc] = useState({
        poke1 : ['poke1.png', 'Charmeleon'],
        poke2 : ['poke2.png', 'Bulbasaur'],
        poke3 : ['poke3.1.png', 'Venusaur'],
        poke4 : ['poke4.png', 'Squirtle'],
        poke5 : ['poke5.png','Ivysaur'],
        poke6 : ['poke6.png','Wartortle'],
        poke7 : ['poke7.png','Charmander'],
        poke8 : ['poke8.png','Blastoise'],
        poke9 : ['poke9.png','Charizard'],
        poke10 : ['poke10.png','Caterpie'],
        poke11 : ['poke11.png','Metapod'],
        poke12 : ['poke12.png','Butterfree'],
    });

    const cardHandler = (e) => {
        setImgSrc({
            poke1 : ['poke1.png', 'Charmander']
        });
    }

    return(
        <div className = "main-sec">
            <div className = "main-container">
                <div className = "row1">
                    <div onClick = {cardHandler} className = "card1">
                        <img src = {imgSrc.poke1[0]} alt = "Pokemon Img" />
                        <p>{imgSrc.poke1[1]}</p>
                    </div>

                    <div className = "card2">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card3">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card4">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>
                </div>

                <div className = "row2">
                    <div className = "card5">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card6">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card7">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card8">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>
                </div>

                <div className = "row3">
                    <div className = "card9">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card10">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card11">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>

                    <div className = "card12">
                        <img src = "" alt = "Pokemon Img" />
                        <p>{'Placeholder'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;