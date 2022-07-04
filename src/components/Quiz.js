import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../actions";
import Submit from "./Submit";
import Question from "./Question";

class Quiz extends Component {
  state = {
    questionNumber: 0,
    selectedAnswer: "",
    correctAnswers: 0,
    shuffledArray: [],
    isCorrectAnswer: null,
    checkAnswer: false,
  };

  componentDidMount() {
    this.props.fetchQuiz(this.props.quizLink);
    const shuffledArray = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    this.setState({ shuffledArray });
  }

  componentDidUpdate() {
    if (this.state.checkAnswer) {
      setTimeout(() => {
        const shuffledArray = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        this.setState({
          shuffledArray,
          checkAnswer: false,
          questionNumber: this.state.questionNumber + 1,
        });
      }, 3000);
    }
  }

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.selectedAnswer ===
      this.props.quiz[this.state.questionNumber].correctAnswer
    ) {
      console.log("answer is correct");
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
        isCorrectAnswer: true,
        checkAnswer: true,
      });
    } else {
      this.setState({
        isCorrectAnswer: false,
        checkAnswer: true,
      });
      console.log("answer is wrong");
    }
  };

  handleAnswersRender = () => {
    if (this.props.quiz.length === 0) {
      return;
    }
    const currentQuestion = this.props.quiz[this.state.questionNumber];
    const allAnswers = [
      ...currentQuestion.incorrectAnswers,
      currentQuestion.correctAnswer,
    ];
    const shuffledAnswers = [];
    this.state.shuffledArray.forEach((item, index) => {
      shuffledAnswers[item] = allAnswers[index];
    });
    console.log(currentQuestion);

    return (
      <ul className="row list-unstyled">
        {shuffledAnswers.map((answer, index) => {
          return (
            <li key={answer} className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id={`option${index}`}
                autoComplete="off"
                onChange={() => {
                  this.setState({ selectedAnswer: answer });
                }}
                required
              />

              <label
                className="btn btn-outline-success w-100 text-start"
                htmlFor={`option${index}`}
              >
                {answer}
              </label>
            </li>
          );
        })}
      </ul>
    );
  };

  handleCheckAnswer() {
    if (this.state.checkAnswer) {
      if (this.state.isCorrectAnswer) {
        return "Your answer is correct";
      } else {
        return "Your answer is incorrect";
      }
    }
  }

  render() {
    return (
      <div>
        {console.log(this.state.selectedAnswer)}
        <div className="row text-center">
          <Question
            number={this.state.questionNumber + 1}
            totalQuestions={this.props.quiz.length}
            currentQuestion={this.props.quiz[this.state.questionNumber]}
          />
          <h2>{this.handleCheckAnswer()}</h2>
          <h5>Correct answers: {this.state.correctAnswers}</h5>
        </div>
        <form onSubmit={this.handleQuestionSubmit}>
          {this.handleAnswersRender()}
          <Submit text="Next Question" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quizLink: state.quizLink, quiz: state.quiz };
};

export default connect(mapStateToProps, { fetchQuiz })(Quiz);
