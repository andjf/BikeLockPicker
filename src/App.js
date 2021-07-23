import "./App.css";
import { useState } from "react";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App({ english_words, english_words_verbose }) {
  const MIN_INPUTS = 2;

  function getPossibleWords(english_words_to_use, dials, current = "") {
    if (dials.length === 0) {
      return [];
    } else if (dials.length - 1 === current.length) {
      let build = [];
      for (let letter of dials[dials.length - 1]) {
        const word = current + letter;
        if (english_words_to_use.indexOf(word) !== -1) {
          build.push(word);
        }
      }
      return build;
    } else {
      let build = [];
      for (let letter of dials[current.length]) {
        for (let word of getPossibleWords(
          english_words_to_use,
          dials,
          current + letter
        )) {
          build.push(word);
        }
      }
      return build;
    }
  }

  const [inputs, setInputs] = useState(Array.from(Array(4)).map(() => ""));
  const [searchContents, setSearchContents] = useState("");
  const [checkClicked, setCheckClicked] = useState(false);
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verboseChecked, setVerboseChecked] = useState(false);

  function addInput() {
    setWords([]);
    setCurrentIndex(0);
    setCheckClicked(false);
    setInputs(inputs.concat(""));
  }

  function removeInput() {
    setWords([]);
    setCurrentIndex(0);
    setCheckClicked(false);
    if (inputs.length > MIN_INPUTS) {
      setInputs(inputs.slice(0, inputs.length - 1));
    }
  }

  function handleInputChange(event) {
    setCheckClicked(false);
    setWords([]);
    setCurrentIndex(0);
    const i = parseInt(event.target.className.split(" ")[1]);
    setInputs(
      inputs
        .slice(0, i)
        .concat([event.target.value])
        .concat(inputs.slice(i + 1, inputs.length))
    );
  }

  function handleChangeSearch(event) {
    if (isNaN(parseInt(event.target.value))) {
      setSearchContents(event.target.value);
    } else {
      setSearchContents(parseInt(event.target.value));
    }
  }

  function check() {
    if (words.length === 0) {
      setCheckClicked(true);
      const arrayToUse = verboseChecked ? english_words_verbose : english_words;
      setWords(
        getPossibleWords(
          arrayToUse.filter((word) => word.length === inputs.length),
          inputs.map((s) => s.toLowerCase())
        )
      );
    }
  }

  function verboseBoxClicked() {
    setWords([]);
    setCheckClicked(false);
    setCurrentIndex(0);
    setVerboseChecked((v) => !v);
  }

  function search() {
    if (!!searchContents) {
      if (isNaN(searchContents)) {
        const indexOfSearch = words.indexOf(searchContents.toLowerCase());
        if (indexOfSearch === -1) {
          document.getElementById("searchInput").value = "Couldn't find that";
        } else {
          setCurrentIndex(indexOfSearch);
        }
      } else {
        setCurrentIndex(
          (((searchContents - 1) % words.length) + words.length) % words.length
        );
      }
    }
  }

  function subtractFromCurrentIndex() {
    setCurrentIndex(
      (((currentIndex - 1) % words.length) + words.length) % words.length
    );
  }

  function addToCurrentIndex() {
    setCurrentIndex((currentIndex + 1) % words.length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputPanel
          inputStrings={inputs}
          inputChangeFunction={handleInputChange}
          addInputFunction={addInput}
          removeInputFunction={removeInput}
          checkButtonFunction={check}
          minimumInputs={MIN_INPUTS}
          verboseBoxClicked={verboseBoxClicked}
        />

        <OutputPanel
          englishWords={words}
          stringInputs={inputs}
          checkClicked={checkClicked}
          currentIndex={currentIndex}
          subtractFromCurrentIndexFunction={subtractFromCurrentIndex}
          addToCurrentIndexFunction={addToCurrentIndex}
          changeSearchFunction={handleChangeSearch}
          searchFunction={search}
        />
      </header>
    </div>
  );
}

export default App;
