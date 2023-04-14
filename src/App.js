import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LengthConverter from "./Pages/LengthConverter";
import TempConverter from "./Pages/TempConverter";
import WeightConverter from "./Pages/WeightConverter";
import NavbarComp from "./Components/NavbarComp";
import FooterComp from "./Components/FooterComp";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<LengthConverter />} />
          <Route path="/temp" element={<TempConverter />} />
          <Route path="/weight" element={<WeightConverter />} />
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;
