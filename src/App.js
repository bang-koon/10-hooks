// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Counter from "./routes/Counter";
// import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/:id" element={<Detail />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
