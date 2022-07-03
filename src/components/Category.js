import React from "react";
import { connect } from "react-redux";
import { fetchCategories, chooseCategory, changePage } from "../actions";

class Category extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleRenderList() {
    return this.props.categories.map((category, index) => {
      return (
        <li key={category.name} className="col-12 col-sm-6 col-lg-4 my-2">
          <input
            className="btn-check"
            type="radio"
            name="options-outlined"
            id={`option${index}`}
            autoComplete="off"
            onChange={() => this.setState({ category: category })}
            required
          />
          <label
            className="btn btn-outline-success w-100 text-start"
            htmlFor={`option${index}`}
          >
            {category.name}
          </label>
        </li>
      );
    });
  }

  handleCategorySubmit = (e) => {
    e.preventDefault();
    if (this.state.category === {}) {
      return;
    }
    this.props.chooseCategory(this.state.category.path);
    this.props.changePage("difficulty");
  };

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col m-2 p-4 bg-success">
            <h1>Choose quiz Category</h1>
          </div>
        </div>
        {/* {console.log(this.state.category)} */}
        <form onSubmit={this.handleCategorySubmit}>
          <ul className="row list-unstyled">{this.handleRenderList()}</ul>

          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 ">
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

const mapStateToProps = (state) => {
  console.log(state);
  return { categories: state.categories };
};

export default connect(mapStateToProps, {
  fetchCategories,
  chooseCategory,
  changePage,
})(Category);
