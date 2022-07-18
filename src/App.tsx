import React from "react";
import {Route, Routes} from "react-router-dom";
import {
  Home,
  MockmanAPI,
  Quiz,
  Result,
  Rules,
} from "./pages";
import {
  Footer,
  Header,
  HomePage,
  SelectingCategories,
  StartingPage,
} from "./components";
import "./styles/root.css";
import "./App.css";
import {useTheme} from "./context";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";

function App(): JSX.Element {
  const {theme} = useTheme();
  return (
    <main className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/category" element={<HomePage />} />
        <Route path="/rules/:quizId" element={<Rules />} />
        <Route
          path="/quiz/:quizId/:quesNo"
          element={<Quiz />}
        />
        <Route path="/result" element={<Result />} />
        <Route path="/mockman" element={<MockmanAPI />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
