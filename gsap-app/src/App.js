import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
function App() {
  const [scrollWindow, setScrollWindow] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
