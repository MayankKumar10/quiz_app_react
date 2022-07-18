import "./rules.css";
import {Link, useParams} from "react-router-dom";
import {rules} from "data/rules";

export function Rules(): JSX.Element {
  const {quesId} = useParams<{quesId: string}>();
  return (
    <>
      <div className="InstallationDomMainContainer TypoHtag card-container-bg flex-space-evenly">
        <div className="padding-small-card rules-main-container shade column-al-sp-around translateOne">
          <div className="rules-container flex-column-al-center padding-small-card shade">
            <h2>Rules Of The Quiz</h2>
            <ul className="list-main-container padding-normal flex-column-start">
              {rules.map((rule, id) => (
                <li className="list-container" key={id}>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <Link
            className="padding-small-card shade flex-column-al-center translateOne margin-normal-top back-btn imgTransition col-12"
            to={`/quiz/${quesId}/${0}`}
          >
            Proceed to Quiz
          </Link>
        </div>
      </div>
    </>
  );
}
