import React from "react";

const Difficulty = () => {
  return (
    <div>
      <div className="row text-center">
        <div className="col m-2 p-4 bg-success">
          <h1>Choose quiz Difficulty</h1>
        </div>
      </div>

      <form>
        <div className="row">
          <div className="col col-sm-6 my-2">
            <input
              className="btn-check"
              type="radio"
              name="options-outlined"
              id="option1"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success w-100 text-start"
              for="option1"
            >
              Easy
            </label>
          </div>
          <div className="col col-sm-6 my-2">
            <input
              className="btn-check"
              type="radio"
              name="options-outlined"
              id="option2"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success w-100 text-start"
              for="option2"
            >
              Madium
            </label>
          </div>
          <div className="col col-sm-6 my-2">
            <input
              className="btn-check"
              type="radio"
              name="options-outlined"
              id="option3"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success w-100 text-start"
              for="option3"
            >
              Hard
            </label>
          </div>
        </div>
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
};

export default Difficulty;
