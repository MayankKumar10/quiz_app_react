import axios from "axios";
import {
  questionProps,
  quizDataProps,
} from "context/initialDataProps";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type quizContextProps = {
  quizData: quizDataProps[];
  activeQuiz: quizDataProps;
  setActiveQuiz: (activeQuiz: quizDataProps) => void;
  activeQuizQuestions: questionProps[];
  setActiveQuizQuestions: (
    activeQuizQuestions: questionProps[]
  ) => void;
  score: number;
  setScore: (score: number) => void;
};

const QuizContext =
  createContext<quizContextProps>(undefined);

const QuizProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [quizData, setQuizData] =
    useState<quizDataProps[]>(undefined);
  const [activeQuiz, setActiveQuiz] =
    useState<quizDataProps>(null);
  const [activeQuizQuestions, setActiveQuizQuestions] =
    useState<questionProps[] | undefined>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/quizzes");
        if (res.status === 200) {
          console.log(res.data);
          setQuizData(res.data.quizzes);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizData,
        activeQuiz,
        setActiveQuiz,
        activeQuizQuestions,
        setActiveQuizQuestions,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuizData = () => useContext(QuizContext);

export {useQuizData, QuizProvider};
