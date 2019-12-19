import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accueil from './components/accueil/Accueil';
import ReactDOM from "react-dom";
import "./components/quiz/styles.css";
import MainQuiz from "./components/quiz/MainQuiz";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Réparations des boules de cristal en cours !
        </p>
        <a
          className="App-link"
          href="https://www.dragon-ball-z.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Officiel
        </a>
      </header> */}

      <Accueil />

      {/* <MainQuiz /> */}
    </div>
  );
}

export default App;
