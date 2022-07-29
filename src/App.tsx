import React from "react";
import {Route, Routes} from "react-router-dom";
import {MockmanAPI, Quiz, Result, Rules} from "./pages";
import {
  Footer,
  ForgotPassword,
  Header,
  HomePage,
  Login,
  SelectingCategories,
  Signup,
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
        <Route path='/category/:selectedCategoryId' element={<SelectingCategories />} />
        <Route path="/rules/:quesId" element={<Rules />} />
        <Route
          path="/quiz/:quesId/:quesNo"
          element={<Quiz />}
        />
        <Route path="/result" element={<Result />} />

        <Route path="/mockman" element={<MockmanAPI />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot_password' element={<ForgotPassword />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
