import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../actions";

class Quiz extends Component {
  state = { questionNumber: 0 };

  componentDidMount() {
    this.props.fetchQuiz(this.props.quizLink);
  }

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };

  handleQuestionRender = () => {
    if (this.props.quiz.length === 0) {
      return;
    }
    const currentQuestion = this.props.quiz[this.state.questionNumber];

    return (
      <div className="col m-2 p-4 bg-success">
        <h1>{currentQuestion.question}</h1>;{console.log(this.props.quiz)}
        <h4>
          Question {this.state.questionNumber + 1} out of{" "}
          {this.props.quiz.length}
        </h4>
      </div>
    );
  };

  handleAnswersRender = () => {
    const currentQuestion = this.props.quiz[this.state.questionNumber];
    const allAnswers = [
      ...currentQuestion.incorrectAnswers,
      currentQuestion.correctAnswer,
    ];
    console.log(allAnswers);
  };

  render() {
    return (
      <div>
        <div className="row text-center">{this.handleQuestionRender()}</div>

        <form onSubmit={this.handleQuestionSubmit}>
          <div className="row">
            <div className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id="option1"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-success w-100 text-start"
                htmlFor="option1"
              >
                Option1
              </label>
            </div>
            <div className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id="option2"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-success w-100 text-start"
                htmlFor="option2"
              >
                Option1
              </label>
            </div>
            <div className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id="option3"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-success w-100 text-start"
                htmlFor="option3"
              >
                Option1
              </label>
            </div>
            <div className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id="option4"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-success w-100 text-start"
                htmlFor="option4"
              >
                Option1
              </label>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6">
              <button type="submit" className="btn btn-dark my-2 w-100">
                Submit answer
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.quiz);
  return { quizLink: state.quizLink, quiz: state.quiz };
};

export default connect(mapStateToProps, { fetchQuiz })(Quiz);
