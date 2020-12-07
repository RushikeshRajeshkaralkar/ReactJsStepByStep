import React, { useState } from "react";
import "../App.css";
function App() {
  const [show, stateShow] = useState(false);
  return (
    <div className="App">
      {show ? <h1>Hello</h1> : null}
      <button onClick={() => stateShow(true)}>Show</button>
    </div>
  );
}

export default App;
