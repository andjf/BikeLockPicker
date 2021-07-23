import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <App english_words={require("an-array-of-english-words")} /> */}
    <App english_words={require("./englishWords.json")} />
  </React.StrictMode>,
  document.getElementById("root")
);
