import React from "react";
import "../../styles/root.css";
import {Link} from "react-router-dom";
import {HomeImage, moviesCollage} from "../../assets";

export const StartingPage = (): JSX.Element => {
  return (
    <div className="padding-small-card shade translateOne classA">
      <img
        className="quiz-index-img"
        src={HomeImage}
        alt="quiz-img"
      />
      <div className="padding-small-card shade classA translateOne container-absolute quiz-container-bg col-6">
        <div className="quiz-container padding-small-card shade imgTransition col-12">
          <img
            className="quiz-img"
            src={moviesCollage}
            alt="quiz1-Img"
          />
        </div>
        <div className="padding-normal card-selector-text flex-column-center col-12">
          <h3>Movie/Series Quiz</h3>
          <p>
            If you are Movies and series buff Play this Quiz
          </p>
        </div>
        <Link to="category">
          <div className="quiz-container padding-small-card shade imgTransition flex-row-center col-12">
            Start Quiz
          </div>
        </Link>
      </div>
    </div>
  );
};
