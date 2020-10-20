import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className="loader-wrapper is-active">
      <div className="loader is-loading"></div>
    </div>
  );
};

export default LoadingSpinner;
