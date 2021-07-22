import "./OutputPanel.css";

function OutputPanel({
  englishWords,
  stringInputs,
  checkClicked,
  currentIndex,
  subtractFromCurrentIndexFunction,
  addToCurrentIndexFunction,
  changeSearchFunction,
  searchFunction,
}) {
  function nf(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="outputs">
      {englishWords.length === 0 ? (
        <h1>
          {!stringInputs.some((s) => s === "")
            ? checkClicked
              ? "No Results"
              : "Click Check"
            : "Fill Out Dials"}
        </h1>
      ) : (
        <div>
          <p>
            {nf(currentIndex + 1)} of {nf(englishWords.length)}
          </p>
          <h1>{englishWords[currentIndex]}</h1>
          <div className="navContainer">
            <button
              onClick={subtractFromCurrentIndexFunction}
              className="navButton leftButton"
            >
              {"<"}
            </button>
            <button
              onClick={addToCurrentIndexFunction}
              className="navButton rightButton"
            >
              {">"}
            </button>
          </div>
          <hr />
          <div className="searchContainer">
            <input
              onChange={changeSearchFunction}
              type="text"
              className="searchInput"
              id="searchInput"
            />
            <button onClick={searchFunction} className="searchButton">
              Search
            </button>
          </div>
          <p className="searchHelp">Search word or position</p>
        </div>
      )}
    </div>
  );
}

export default OutputPanel;
