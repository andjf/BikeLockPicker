import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App
      english_words={require("./englishWords.json")}
      english_words_verbose={require("an-array-of-english-words")}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
