import React, { Component, useState } from "react";

function RegiEx() {
  const [state, setState] = useState(["Rushikesh"]);
  const [input, updateState] = useState();
  console.log(input);
  const addValue = (e) => {
    e.preventDefault();
    setState([...state, input]);
    updateState("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => updateState(e.target.value)}
        ></input>
        <button disabled={!input} onClick={addValue}>
          Value
        </button>
      </form>
      <ul>
        {state.map((newState) => (
          <li>{newState}</li>
        ))}
      </ul>
    </div>
  );
}
export default RegiEx;
