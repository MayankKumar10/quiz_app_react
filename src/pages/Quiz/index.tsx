import axios from "axios";
import {useQuizData} from "context";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Options} from "components";
import "./quiz.css";

export function Quiz(): JSX.Element {
  const {quesId, quesNo} = useParams<{
    quesId: string;
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
    selection: string;
  }>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/quizzes/${quesId}`
        );
        setActiveQuiz(response.data.quiz);
        setActiveQuizQuestions(
          response.data.quiz.questions.map((i: any) => ({
            ...i,
            selection: "",
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [quesId, setActiveQuiz, setActiveQuizQuestions]);

  useEffect(() => {
    activeQuizQuestions &&
      setQues(activeQuizQuestions[quesNo]);
  }, [quesNo, setQues, activeQuizQuestions]);

  const handleOptionChange = (option: any) => {
    const data = activeQuizQuestions;

    setActiveQuizQuestions(
      data.map((q) =>
        q.id === ques.id
          ? {...q, selection: option}
          : {...q}
      )
    );
  };

  const gotoNextQuestion = (): void => {
    if (ques.selection === ques.answer) {
      setScore(score + 20);
    }
    if (Number(quesNo) >= activeQuizQuestions.length - 1) {
      navigate("/result");
    } else {
      navigate(`/quiz/${quesId}/${Number(quesNo) + 1}`);
    }
  };

  return (
    <>
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
        {ques && (
          <>
            <div className="padding-small-card shade quiz-flex translateOne">
              <h4>{activeQuiz.name}</h4>
              <>
                <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-bottom back-btn col-12">
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
                <div className="quiz-container padding-small-card shade">
                  <p className="padding-normal">
                    {ques.question}
                  </p>
                </div>
                <div className="padding-normal card-selector-text col-12">
                  <div className="option-container options-cont margin-bottom-2">
                    {ques.options.map((option, id) => (
                      <Options
                        option={option}
                        key={id}
                        id={id.toString()}
                        answer=""
                        selection={ques.selection}
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
                  className="padding-small-card shade flex-column-al-center translateOne margin-normal-top imgTransition back-btn col-12"
                >
                  {Number(quesNo) + 1 ===
                  activeQuizQuestions.length
                    ? "Submit"
                    : "Next Question"}
                </button>
              </>
            </div>
          </>
        )}
      </div>
    </>
  );
}
