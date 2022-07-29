import "../../styles/root.css";

import { useQuizData } from "context";
import { CategoryCard } from "components/CategoryCard";

export const HomePage = (): JSX.Element => {
  const {quizData} = useQuizData();

  return (
    <section className="quiz-main-container quiz-container-bg col-12">
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      {quizData &&
        quizData.map((item) => (
          <CategoryCard key={item._id} quiz={item} />
        ))}
      </div>
    </section>
  );
};


