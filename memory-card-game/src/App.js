import React from 'react';
import Header from './components/Header';
import Score from './components/Score';
import MainSection from './components/MainSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Score />
      <MainSection />
    </div>
  );
}

export default App;
