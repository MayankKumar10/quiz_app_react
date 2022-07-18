import "../../styles/root.css";

import {SelectingCategories} from "..";

export const HomePage = (): JSX.Element => {
  return (
    <section className="quiz-main-container quiz-container-bg col-12">
      <div className="indexContainer column-al-sp-around">
        <SelectingCategories />
      </div>
    </section>
  );
};
