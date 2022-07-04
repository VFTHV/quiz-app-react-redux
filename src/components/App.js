import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Quiz from "./Quiz";

class App extends React.Component {
  handleRenderPages = (pageName) => {
    if (pageName === "") {
      return <Category />;
    }
    if (pageName === "difficulty") {
      return <Difficulty />;
    }
    if (pageName === "quiz") {
      return <Quiz />;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        {this.handleRenderPages(this.props.changePage)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { changePage: state.pageName };
};

export default connect(mapStateToProps)(App);
