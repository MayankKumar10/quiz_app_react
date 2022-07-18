import "./quizCard.css";
import React from "react";
// import { PlayIcon } from "assets/icons";
import {Link} from "react-router-dom";

type QuizCardProps = {
  key: string;
  quiz: {
    _id: string;
    difficulty: string;
    name: string;
    // quote: string;
    genres: string[];
    poster: string;
  };
};

export function QuizCard({
  quiz,
}: QuizCardProps): JSX.Element {
  const {
    _id: quizId,
    difficulty,
    name,
    //quote,
    genres,
    poster,
  } = quiz;
  return (
    <div className="padding-small-card shade classA translateOne">
      <Link to={`/rules/${quizId}`}>
        <div className="quiz-container padding-small-card shade imgTransition">
          <img
            className="quiz-img"
            src={poster}
            alt="quiz1-Img"
          />
        </div>
        <div className="padding-normal card-selector-text">
          <div className="category-body">
            <span className="level">{difficulty}</span>
            <h5 className="name">{name}</h5>
            {/* <p>{quote}</p> */}
            <div>
              {genres.map(
                (
                  genre: string,
                  index: number
                ): JSX.Element => (
                  <span className="genre" key={index}>
                    {genre}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
