import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnitConverter from "./Components/UnitConverter";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UnitConverter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
