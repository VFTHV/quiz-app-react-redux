import React from "react";

const Question = ({ number, currentQuestion, totalQuestions }) => {
  if (totalQuestions === 0) {
    return;
  }
  return (
    <div className="col m-2 p-4 bg-success">
      <h1>{currentQuestion.question}</h1>
      <h4>
        Question {number} out of {totalQuestions}
      </h4>
    </div>
  );
};

export default Question;
