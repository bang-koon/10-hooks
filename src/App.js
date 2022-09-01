import React from "react";
import { useTitle } from "./api/useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("home"), 3000);
  return <div className="App"></div>;
};

export default App;
