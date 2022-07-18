import "./result.css";
import {useQuizData} from "context";
import {Options} from "components";
import {useNavigate} from "react-router-dom";
import {ResultTrophy, Trophy1} from "../../assets";

export function Result(): JSX.Element {
  const {
    activeQuizQuestions,
    score,
    setScore,
    setActiveQuiz,
    setActiveQuizQuestions,
  } = useQuizData();
  const navigate = useNavigate();
  const handleQuizFinish = (): void => {
    setScore(0);
    setActiveQuiz(null);
    setActiveQuizQuestions(null);
    navigate("/");
  };
  return (
    <div>
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
        <div className="padding-small-card shade classA translateOne">
          <h3>Result</h3>
          <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-bottom back-btn">
            score: {score}
          </div>
          <div className="quiz-container flex-row-center padding-small-card shade">
            {score >= 60 ? (
              <img
                src={ResultTrophy}
                alt="trophy"
                width="450"
                height="400"
              />
            ) : (
              <img
                src={Trophy1}
                alt="loss"
                width="200"
                height="200"
              />
            )}
          </div>
          <div className="padding-normal card-selector-text">
            <div className="option-container">
              {activeQuizQuestions &&
                activeQuizQuestions.map((q) => (
                  <div key={q.id} className="m-b-2">
                    <p className="question">{q.question}</p>
                    {q.options.map((option, id) => (
                      <Options
                        option={option}
                        id={id.toString()}
                        answer={q.answer}
                        isSelected={q.isSelected}
                        handleOptionChange={() => {}}
                        key={id}
                        type="result"
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>

          <button
            className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn col-12"
            onClick={handleQuizFinish}
          >
            Quiz Finish
          </button>
        </div>
      </div>
    </div>
  );
}
