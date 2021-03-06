import React from "react";
import { connect } from "react-redux";
import { fetchCategories, chooseCategory, changePage } from "../actions";
import Submit from "./Submit";

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

        <form onSubmit={this.handleCategorySubmit}>
          <ul className="row list-unstyled">
            {this.props.categories.length === 0 ? (
              <div className="text-center fs-4">Loading...</div>
            ) : (
              this.handleRenderList()
            )}
          </ul>

          {this.props.categories.length === 0 ? null : (
            <Submit text="Next to choose difficulty" />
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, {
  fetchCategories,
  chooseCategory,
  changePage,
})(Category);
