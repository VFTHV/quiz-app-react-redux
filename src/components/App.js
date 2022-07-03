import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Question from "./Question";

class App extends React.Component {
  handleRenderPages = (pageName) => {
    if (pageName === "") {
      return <Category />;
    }
    if (pageName === "difficulty") {
      return <Difficulty />;
    }
    if (pageName === "question") {
      return <Question />;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        {this.handleRenderPages(this.props.changePage)}

        {/* <Category />
        <Difficulty />
        <Question /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { changePage: state.changePage };
};

export default connect(mapStateToProps)(App);
