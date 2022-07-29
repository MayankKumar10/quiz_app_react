import React from "react";
import { useParams } from "react-router-dom";
import {useQuizData} from "../../context";
import {QuizCard} from "../QuizCard";

export const SelectingCategories = (): JSX.Element => {
  const {quizData} = useQuizData();
  const {selectedCategoryId} = useParams<{selectedCategoryId: string}>()

  let filterData = quizData.filter(item=> item._id === selectedCategoryId)

  return (
    <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      {quizData &&
        filterData.map((item) => 
          <QuizCard key={item._id} quiz={item} />
        )}
    </div>
  );
};
