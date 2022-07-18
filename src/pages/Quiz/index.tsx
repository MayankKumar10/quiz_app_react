import axios from "axios";
import {useQuizData} from "context";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Options} from "components";
import "./quiz.css";

export function Quiz(): JSX.Element {
  const {quizId, quesNo} = useParams<{
    quizId: string;
    quesNo: string;
  }>();
  const navigate = useNavigate();
  const {
    activeQuiz,
    setActiveQuiz,
    activeQuizQuestions,
    setActiveQuizQuestions,
    score,
    setScore,
  } = useQuizData();
  const [ques, setQues] = useState<{
    id: string;
    question: string;
    options: string[];
    answer: string;
    isSelected: string;
  }>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/quizzes/${quizId}`
        );
        setActiveQuiz(response.data.quiz);
        setActiveQuizQuestions(
          response.data.quiz.questions.map((i) => ({
            ...i,
            isSelected: "",
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [quizId, setActiveQuiz, setActiveQuizQuestions]);

  useEffect(() => {
    activeQuizQuestions &&
      setQues(activeQuizQuestions[quesNo]);
  }, [quesNo, setQues, activeQuizQuestions]);

  const handleOptionChange = (option) => {
    const data = activeQuizQuestions;

    setActiveQuizQuestions(
      data.map((q) =>
        q.id === ques.id
          ? {...q, isSelected: option}
          : {...q}
      )
    );
  };

  const gotoNextQuestion = (): void => {
    if (ques.isSelected === ques.answer) {
      setScore(score + 20);
    }
    if (Number(quesNo) >= activeQuizQuestions.length - 1) {
      navigate("/result");
    } else {
      navigate(`/quiz/${quizId}/${Number(quesNo) + 1}`);
    }
  };

  return (
    <>
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
        {ques && (
          <>
            <div className="padding-small-card shade classA translateOne">
              <h4>{activeQuiz.name}</h4>
              <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-bottom back-btn">
                <p>
                  Question:
                  <span className="highlight-text">{`${
                    Number(quesNo) + 1
                  }/${activeQuizQuestions.length}`}</span>
                </p>
                <p>
                  Score:
                  <span className="highlight-text">
                    {score}
                  </span>
                </p>
              </div>
              {/* <h3 className="header-quiz-text">Stay Foolish Stay Hungry</h3 > */}
              <div className="quiz-container padding-small-card shade">
                <p className="padding-normal">
                  {ques.question}
                </p>
              </div>
              <div className="padding-normal card-selector-text">
                <div className="option-container options-cont m-b-2">
                  {ques.options.map((option, id) => (
                    <Options
                      option={option}
                      key={id}
                      id={id.toString()}
                      answer=""
                      isSelected={ques.isSelected}
                      handleOptionChange={
                        handleOptionChange
                      }
                      type="quiz"
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={gotoNextQuestion}
                className="padding-small-card shade flex-column-al-center translateOne margin-normal-top imgTransition back-btn"
              >
                {Number(quesNo) + 1 ===
                activeQuizQuestions.length
                  ? "Submit"
                  : "Next Question"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
