import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnitConverter from "./Components/UnitConverter";
import NavbarComp from "./Components/NavbarComp";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<UnitConverter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
