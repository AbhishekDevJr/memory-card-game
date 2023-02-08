import React from 'react';
import Header from './components/Header';
import Score from './components/Score';
import MainSection from './components/MainSection';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [currentScoreDis, setCurrentScoreDis] = useState(0);
  const [bestScoreDis, setBestScoreDis] = useState(0);

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
