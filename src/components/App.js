import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Quiz from "./Quiz";
import Result from "./Result";

class App extends React.Component {
  handleRenderPages = (pageName) => {
    switch (pageName) {
      case "difficulty":
        return <Difficulty />;
      case "quiz":
        return <Quiz />;
      case "result":
        return <Result />;
      default:
        return <Category />;
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
