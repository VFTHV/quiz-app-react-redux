import React from "react";

class Category extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col m-2 p-4 bg-success">
            <h1>Choose quiz Category</h1>
          </div>
        </div>

        <form>
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
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6">
              <button type="submit" className="btn btn-dark my-2 w-100">
                Next to choose difficulty
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Category;
