import React from "react";
import {Link} from "react-router-dom";

export const ResultPage = () => {
  return (
    <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      <div className="padding-small-card shade classA translateOne">
        <h3>Result</h3>
        <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-bottom back-btn">
          score: 6/10
        </div>
        <div className="quiz-container flex-row-center padding-small-card shade">
          <img
            className="quiz-result-img imgTransition"
            src="../components/img/trophy3.jpg"
            alt=""
          />
        </div>
        <div className="padding-normal card-selector-text">
          <div className="option-container">
            <button
              className="options quiz-container padding-small-card shade"
              value="true"
            >
              Q1 Reginald
            </button>
            <button className="options quiz-container padding-small-card shade">
              Q2 1972
            </button>
            <button
              className="options quiz-container padding-small-card shade"
              value="true"
            >
              Q3 Option 3
            </button>
            <button className="options quiz-container padding-small-card shade">
              Q4 Option 4
            </button>
            <button
              className="options quiz-container padding-small-card shade"
              value="true"
            >
              Q5 Option 5
            </button>
          </div>
        </div>

        <Link
          to="/"
          className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn col-12"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};
