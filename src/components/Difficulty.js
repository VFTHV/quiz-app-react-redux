import React from "react";
import { connect } from "react-redux";

class Difficulty extends React.Component {
  constructor() {
    super();
    this.state = { difficulty: ["Easy", "Medium", "Hard"] };
  }

  handleRenderDifficulty = () => {
    return this.state.difficulty.map((item, index) => {
      return (
        <li key={item} className="col-12 col-sm-4 my-2">
          <input
            className="btn-check"
            type="radio"
            name="options-outlined"
            id={`option${index}`}
            autoComplete="off"
          />
          <label
            className="btn btn-outline-success w-100 text-start"
            htmlFor={`option${index}`}
          >
            {item}
          </label>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col m-2 p-4 bg-success">
            <h1>Choose quiz Difficulty</h1>
          </div>
        </div>

        <form>
          <ul className="row list-unstyled">{this.handleRenderDifficulty()}</ul>

          <div className="row justify-content-center">
            <div className="col-12 col-sm-6">
              <button type="submit" className="btn btn-dark my-2 w-100">
                Next to the Quiz
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Difficulty);
