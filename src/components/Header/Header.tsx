import {Link} from "react-router-dom";

export const Header = (): JSX.Element => {
  return (
    <div className="ComponentMainBoxOne img-responsive">
      <header className="headerContainerMain header-center Header-TextSize box-shadow quiz-container-bg">
        <div className="headerContainerOne flex-evenly padding-small-left1">
          <h4>
            <Link to="/">Vision Quiz</Link>
          </h4>
        </div>

        <div className="headerContainerTwo flex padding-top-normal1">
          <form
            className="search-container-main"
            action="#"
          >
            <input
              className="boxShadow search-container"
              type="search"
              name=""
              placeholder="search"
              id=""
            />
            <button className="material-icons button-transparent primary-btn">
              search
            </button>
          </form>

          <button
            id="myBtn"
            className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
          >
            <a className="headerAnchorTag flex-column-center">
              <span className="button-inner-txt">
                Login
              </span>
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};
