import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnitConverter from "./Components/UnitConverter";
import NavbarComp from "./Components/NavbarComp";
import FooterComp from "./Components/FooterComp";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<UnitConverter />} />
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;
