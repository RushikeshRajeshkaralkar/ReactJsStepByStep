import React, { useState } from "react";
import PropEx from "./propEx";

function Users() {
  const [state, updateState] = useState("Rushikesh");

  return (
    <div>
      <PropEx name={state} />
      <button onClick={() => updateState("Mohit")}>Update Name</button>
    </div>
  );
}

export default Users;
