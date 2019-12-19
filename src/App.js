import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import MainQuiz from "./components/quiz/MainQuiz";
import "./components/quiz/styles.css";
import './App.css';

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

      <Router>
        <Switch>
          <Route exact path="/" exact component={Accueil} />
          <Route exact path="/quiz" exact component={MainQuiz} />
        </Switch>
      </Router>
      {}
    </div>
  );
}

export default App;
