import "./InputPanel.css";

function InputPanel({
  inputStrings,
  inputChangeFunction,
  addInputFunction,
  removeInputFunction,
  checkButtonFunction,
  minimumInputs,
}) {
  return (
    <div className="inputs">
      {inputStrings.map((s, i) => (
        <input
          className={"dialInput " + i}
          key={i}
          onChange={inputChangeFunction}
          type="text"
        />
      ))}

      <hr />

      <button className="inputButton" onClick={addInputFunction}>
        Add Dial
      </button>
      <button className="inputButton" onClick={removeInputFunction}>
        {inputStrings.length === minimumInputs ? (
          <strike>Remove Dial</strike>
        ) : (
          "Remove Dial"
        )}
      </button>
      <button className="inputButton" onClick={checkButtonFunction}>
        Check
      </button>
    </div>
  );
}

export default InputPanel;
