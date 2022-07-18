import React from "react";
import {useQuizData} from "../../context";
import {QuizCard} from "../QuizCard";

export const SelectingCategories = (): JSX.Element => {
  const {quizData} = useQuizData();

  return (
    <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      {quizData &&
        quizData.map((item) => (
          <QuizCard key={item._id} quiz={item} />
        ))}
    </div>
  );
};
