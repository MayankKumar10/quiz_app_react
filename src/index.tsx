import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {QuizProvider, ThemeProvider} from "./context";
import { AuthProvider } from "./context/AuthProvider";

makeServer();

type containerProps ={
  container: HTMLElement | null
}

const container   = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      {/* <AuthProvider> */}
      <ThemeProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </ThemeProvider>
      {/* </AuthProvider> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
