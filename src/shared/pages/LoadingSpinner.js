import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div id="overlay">
      <div className="spinner"></div>
      <br />
      Loading...
    </div>
  );
};

export default LoadingSpinner;
