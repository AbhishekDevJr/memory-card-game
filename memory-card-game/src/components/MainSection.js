import React from 'react';
import {useState, useEffect} from 'react';

//Global Array that stores players choices
let playerChoicesArray = [];

const MainSection = (props) => {
    //State Variables to dynamically store Scores and Image Src attributes/Names of Images
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [prevBestScore, setPrevBestScore] = useState(0);
    const [imgSrcI, setimgSrcI] = useState([
        {
            src : 'poke1.png',
            name : 'Charmeleon'
        },
        {
            src : 'poke2.png',
            name : 'Bulbasaur'
        },
        {
            src : 'poke3.1.png',
            name : 'Venusaur'
        },
        {
            src : 'poke4.png',
            name : 'Squirtle'
        },
        {
            src : 'poke5.png',
            name : 'Ivysaur'
        },
        {
            src : 'poke6.png',
            name : 'Wartortle'
        },
        {
            src : 'poke7.png',
            name : 'Charmander'
        },
        {
            src : 'poke8.png',
            name : 'Blastoise'
        },
        {
            src : 'poke9.png',
            name : 'Charizard'
        },
        {
            src : 'poke10.png',
            name : 'Caterpie'
        },
        {
            src : 'poke11.png',
            name : 'Metapod'
        },
        {
            src : 'poke12.png',
            name : 'Butterfree'
        }
    ]);
    //Temporary Array that stores same content as ImgSrcI Array but is used to randomize and assign to ImgSrcI Array.
    let tempArray = [
        {
            src : 'poke1.png',
            name : 'Charmeleon'
        },
        {
            src : 'poke2.png',
            name : 'Bulbasaur'
        },
        {
            src : 'poke3.1.png',
            name : 'Venusaur'
        },
        {
            src : 'poke4.png',
            name : 'Squirtle'
        },
        {
            src : 'poke5.png',
            name : 'Ivysaur'
        },
        {
            src : 'poke6.png',
            name : 'Wartortle'
        },
        {
            src : 'poke7.png',
            name : 'Charmander'
        },
        {
            src : 'poke8.png',
            name : 'Blastoise'
        },
        {
            src : 'poke9.png',
            name : 'Charizard'
        },
        {
            src : 'poke10.png',
            name : 'Caterpie'
        },
        {
            src : 'poke11.png',
            name : 'Metapod'
        },
        {
            src : 'poke12.png',
            name : 'Butterfree'
        },
];
    //useEffect Hook used as componentDidMount lifecycle method that runs once at the time of mounting this component to randomize Images 
    useEffect(() => {
        tempArray.forEach((pokeObj, index, arr) => {
            let  randomIndex = Math.floor(Math.random() * (arr.length));
            let temp = arr[index];
            arr[index] = arr[randomIndex];
            arr[randomIndex] = temp;
        });
        setimgSrcI(tempArray);
    }, []);


    const cardHandler = (e) => {
        //Loop to randomize Images using tempArray every time user triggers On Click Event Listener or clicks a card.
        tempArray.forEach((pokeObj, index, arr) => {
            let  randomIndex = Math.floor(Math.random() * (arr.length));
            let temp = arr[index];
            arr[index] = arr[randomIndex];
            arr[randomIndex] = temp;
        });
        
        setimgSrcI(tempArray);

        //Main Game logic that keeps track of currentScore, bestScore, prevBestScore by matching the players current choice previous choices
           
            if(playerChoicesArray.includes(e.currentTarget.lastChild.textContent)){
                
                if(prevBestScore === 0){
                    setPrevBestScore(currentScore);
                    setBestScore(currentScore);
                    setCurrentScore(0);
                }
                else{
                    if(currentScore >= prevBestScore){
                        setBestScore(currentScore);
                        setPrevBestScore(currentScore);
                        setCurrentScore(0);
                    }
                    else{
                        setBestScore(prevBestScore);
                        setCurrentScore(0);
                    }
                }

                playerChoicesArray = [];
            }
            else{
                playerChoicesArray.push(e.currentTarget.lastChild.textContent);
                setCurrentScore(currentScore + 1);
                if(prevBestScore > 0){
                    if(currentScore >= prevBestScore){
                        setBestScore(currentScore);
                    }
                    else{
                        setBestScore(prevBestScore);
                    }
                }
                else{
                    setBestScore(bestScore + 1);
                }
                
            }
    }

    //Updates the Scores by calling the changeScoreFun function and passing the state score variables as arguments.
    useEffect(() => {
        if(currentScore > bestScore){
            setBestScore(currentScore);
        }
        props.changeScoreFun((currentScore), (bestScore));
    }, [currentScore, bestScore]);

    return(
        <div className = "main-sec">
            <div className = "main-container">
                <div className = "row1">
                    <div onClick = {cardHandler} className = "card1">
                        <img src = {imgSrcI[0].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[0].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card2">
                        <img src = {imgSrcI[1].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[1].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card3">
                        <img src = {imgSrcI[2].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[2].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card4">
                        <img src = {imgSrcI[3].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[3].name}</p>
                    </div>
                </div>

                <div className = "row2">
                    <div onClick = {cardHandler} className = "card5">
                        <img src = {imgSrcI[4].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[4].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card6">
                        <img src = {imgSrcI[5].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[5].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card7">
                        <img src = {imgSrcI[6].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[6].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card8">
                        <img src = {imgSrcI[7].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[7].name}</p>
                    </div>
                </div>

                <div className = "row3">
                    <div onClick = {cardHandler} className = "card9">
                        <img src = {imgSrcI[8].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[8].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card10">
                        <img src = {imgSrcI[9].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[9].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card11">
                        <img src = {imgSrcI[10].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[10].name}</p>
                    </div>

                    <div onClick = {cardHandler} className = "card12">
                        <img src = {imgSrcI[11].src} alt = "Pokemon Img" />
                        <p>{imgSrcI[11].name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;