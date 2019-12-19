import React from "react";
import { quizData } from "./quizData";

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    isFinish: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {

    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="mob-11 tab-10 dsk-7 result message">
          <h3 className="cadre orange tot">Vous avez récupéré {this.state.score} boule(s) de cristal sur 7 ! </h3>
          {/*  <p className="cadre orange">
            Les réponses correctes étaient:
            <ul className="dsk-7 cadre orange">
              {quizData.map((item, index) => (
                <li className="ui floating message options cadre white" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p> */}
          {this.state.score === 0 && <iframe src="https://giphy.com/embed/nuwtayd9rKF44" className="cadre orange final"></iframe>}
          {this.state.score === 1 && <iframe src="https://giphy.com/embed/nuwtayd9rKF44" className="cadre orange final"></iframe>}
          {this.state.score === 2 && <iframe src="https://giphy.com/embed/VpOEyL2bhLZ7y" className="cadre orange final"></iframe>}
          {this.state.score === 3 && <iframe src="https://giphy.com/embed/VpOEyL2bhLZ7y" className="cadre orange final"></iframe>}
          {this.state.score === 4 && <iframe src="https://giphy.com/embed/do0xfdH2Ssh56" className="cadre orange final"></iframe>}
          {this.state.score === 5 && <iframe src="https://giphy.com/embed/do0xfdH2Ssh56" className="cadre orange final"></iframe>}
          {this.state.score === 6 && <iframe src="https://giphy.com/embed/CeWcJJsIUyUYE" className="cadre orange final"></iframe>}
          {this.state.score === 7 && <iframe src="https://giphy.com/embed/poPz9jfVYTbDW" className="cadre orange final"></iframe>}

        </div>
      );
    } else {
      return (
        <div className="mob-11 tab-11 dsk-7 App">
          <h1 className="cadre quest orange">{this.state.questions} </h1>
          <span className="cadre white">{`${quizData.length - currentQuestion} question(s) restante(s)`}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`dsk-6 ui floating message options cadre orange
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button cadre bouton white"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Suivant
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button cadre bouton white" onClick={this.finishHandler}>
              Fini
            </button>
          )}
          <br></br>
          <div className="overf cadre orange">
            <iframe className="gif" src="https://giphy.com/embed/MXR9QEVRdvwKgFTVi9"></iframe>
          </div>
        </div>
      );
    }
  }
}

export default MainQuiz;