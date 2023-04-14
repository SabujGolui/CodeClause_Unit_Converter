import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LengthConverter from "./Pages/LengthConverter";
import NavbarComp from "./Components/NavbarComp";
import FooterComp from "./Components/FooterComp";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<LengthConverter />} />
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;
