import React from "react";
import { useInput } from "./API/useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="name" {...name} />
      {/* {...name} === value={name.value} */}
    </div>
  );
};

export default App;
