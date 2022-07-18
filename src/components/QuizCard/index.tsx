import "../../styles/root.css";
import {Link} from "react-router-dom";

type QuizCardProps = {
  key: string;
  quiz: {
    _id: string;
    name: string;
    categories: string[];
    quotes: string;
    quizImg: string;
    levels: string;
  };
};

export function QuizCard({
  quiz,
}: QuizCardProps): JSX.Element {
  const {
    _id: quesId,
    name,
    categories,
    quotes,
    quizImg,
    levels,
  } = quiz;
  return (
    <div className="padding-small-card shade flex-cl-center translateOne m-l-2">
      <Link to={`/rules/${quesId}`}>
        <div className="quiz-container padding-small-card shade imgTransition">
          <img
            className="quiz-img"
            src={quizImg}
            alt="quiz1-Img"
          />
        </div>
        <div className="padding-normal card-selector-text">
          <div className="category-body">
            <span className="level">{levels}</span>
            <h5 className="name">{name}</h5>
            <p>{quotes}</p>
            <div>
              {categories.map(
                (
                  category: string,
                  index: number
                ): JSX.Element => (
                  <span className="category" key={index}>
                    {category}
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
