import React from "react";
import "./Badge.css";

const badge = () => {
  return (
    <div className="badge-container">
      <h2>14 day free trial</h2>
      <div className="badge">
        <p className="badge-price">€ 7.99</p>
        <p className="badge-timespan">per month</p>
      </div>
      <p className="badge-bottom-text">
        Or save 40% on an annual subscription at only £59.99
      </p>
    </div>
  );
};

export default badge;
