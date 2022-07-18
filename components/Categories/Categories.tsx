import React from "react";
import {Link, useParams} from "react-router-dom";
import {Movies, TV_Shows} from "../../assets";
import {UseQuizData} from "../../context/QuizDataProvider";

export const Categories = () => {
  const {quizData} = UseQuizData();
  const {categoriyId} = useParams();

  return (
    <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      <div className="padding-small-card shade classNameA translateOne">
        {console.log(quizData)}
        <Link to="/categories/:categoriyId">
          <div className="quiz-container padding-small-card shade imgTransition">
            <img
              className="quiz-img"
              src={TV_Shows}
              alt="quiz1-Img"
            />
          </div>
          <div className="padding-normal card-selector-text">
            <h4>Series</h4>
            <p>
              5 Questions came from different Popular Series
            </p>
          </div>
        </Link>
      </div>

      <div className="padding-small-card shade classNameA translateOne">
        <Link
          className="quiz-container padding-small-card shade imgTransition"
          to="/categories/:categoriyId"
        >
          <img
            className="quiz-img"
            src={Movies}
            alt="quiz1-Img"
            srcset=""
          />
        </Link>
        <div className="padding-normal card-selector-text">
          <h4>Movies</h4>
          <p>
            5 Questions came from different Popular Movies
          </p>
        </div>
      </div>
    </div>
  );
};
