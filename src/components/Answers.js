import { shuffle } from "lodash";
import React from "react";

class Answers extends React.Component {
  state = { shuffledArray: [] };

  componentDidMount() {
    const shuffledArray = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    this.setState({ shuffledArray });
  }

  handleAnswersRender = () => {
    const currentQuestion = this.props.question;

    const allAnswers = [
      ...currentQuestion.incorrectAnswers,
      currentQuestion.correctAnswer,
    ];

    return (
      <ul className="row list-unstyled">
        {console.log(this.state.shuffledArray)}
        {allAnswers.map((answer, index) => {
          return (
            <li key={answer} className="col-12 col-sm-6 my-2">
              <input
                className="btn-check"
                type="radio"
                name="options-outlined"
                id={`option${index}`}
                autoComplete="off"
                onChange={() => {}}
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

  render() {
    return <ul className="row list-unstyled">{this.handleAnswersRender()}</ul>;
  }
}

export default Answers;
