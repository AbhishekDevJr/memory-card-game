import React from 'react';
import Header from './components/Header';
import Score from './components/Score';
import MainSection from './components/MainSection';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  //State Variables used to receive data passed from MainSection Child Component 
  const [currentScoreDis, setCurrentScoreDis] = useState(0);
  const [bestScoreDis, setBestScoreDis] = useState(0);

  //Function that is called in MainSection child component to pass state variables as arguments
  function changeState(currentScoreP, bestScoreP,){
      setCurrentScoreDis(currentScoreP);
      setBestScoreDis(bestScoreP);
  }

  return (
    <div className="App">
      <Header />
      <Score testCurrScore = {currentScoreDis} testBestScore = {bestScoreDis}/>
      <MainSection changeScoreFun = {changeState} />
    </div>
  );
}

export default App;
