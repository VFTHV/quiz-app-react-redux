import React from "react";

const Submit = ({ text }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6 col-lg-4">
        <button type="submit" className="btn btn-dark my-2 w-100">
          {text}
        </button>
      </div>
    </div>
  );
};

export default Submit;
