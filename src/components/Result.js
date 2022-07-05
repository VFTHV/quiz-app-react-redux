import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  handleRenderRecommendations = () => {
    const { correctAnswers } = this.props;
    if (correctAnswers < 5) {
      return "Please try easier difficulty next time :)";
    } else if (correctAnswers >= 5 && correctAnswers < 8) {
      return "You can do better next time :)";
    } else if (correctAnswers >= 8 && correctAnswers < 9) {
      return "You did great this time :)";
    } else {
      return "You are perfect!!! :)";
    }
  };

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col m-2 p-4 bg-success">
            <h1>
              You scored {this.props.correctAnswers} out of{" "}
              {this.props.quiz.length}
            </h1>
            <h2>{this.handleRenderRecommendations()}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6">
            <button
              className="btn btn-dark my-2 w-100"
              onClick={() => window.location.reload()}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.correctAnswers,
    quiz: state.quiz,
  };
};

export default connect(mapStateToProps)(Result);
