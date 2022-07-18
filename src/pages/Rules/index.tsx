import "./rules.css";
// import rulesIcon from "assets/hero/rules.png";
//import { FingerRight } from "assets/icons";
import {Link, useParams} from "react-router-dom";
import {rules} from "data/rules";

export function Rules(): JSX.Element {
  const {quizId} = useParams<{quizId: string}>();
  return (
    <>
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
        <div className="padding-small-card rules-main-container shade column-al-sp-around translateOne">
          <div className="rules-container flex-column-al-center padding-small-card shade">
            <h2>Rules Of The Quiz</h2>
            <ul className="list-main-container padding-normal flex-column-start">
              {rules.map((rule, id) => (
                <li className="list-container" key={id}>
                  {/* <span>
                <FingerRight className="icon-arrow" />
              </span> */}
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <Link
            className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn imgTransition col-12"
            to={`/quiz/${quizId}/${0}`}
          >
            Proceed to Quiz
          </Link>

          <Link
            to={`/`}
            className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn imgTransition col-12"
          >
            Go Back
          </Link>
        </div>
      </div>

      <section>
        <div className="card">
          {/* <img src={rulesIcon} alt="rules__page--img" /> */}
          <h6>Rules to be followed</h6>
          <ul>
            {rules.map((rule, id) => (
              <li key={id}>
                {/* <span>
                <FingerRight className="icon-arrow" />
              </span> */}
                {rule}
              </li>
            ))}
          </ul>
          <Link
            className="btn btn-primary"
            to={`/quiz/${quizId}/${0}`}
          >
            Start Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
