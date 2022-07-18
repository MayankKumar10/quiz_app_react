export const RulesCard = () => {
  return (
    <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
      <div className="padding-small-card rules-main-container shade column-al-sp-around translateOne">
        <div className="rules-container flex-column-al-center padding-small-card shade">
          <h2>Rules Of The Quiz</h2>
          <ul className="list-main-container padding-normal flex-column-start">
            <li className="list-container">
              There are fives questions in Quiz
            </li>
            <li className="list-container">
              Two marks for each Question
            </li>
            <li className="list-container">
              There is no negative marking
            </li>
            <li className="list-container">
              you can choose only one option
            </li>
            <li className="list-container">
              You can not skip the questions
            </li>
          </ul>
        </div>

        <a
          className="col-12"
          href="../components/quizOne.html"
          target="iframe-quiz"
        >
          <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn imgTransition">
            Proceed to Quiz
          </div>
        </a>

        <div className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn imgTransition col-12">
          Go Back
        </div>
      </div>
    </div>
  );
};
