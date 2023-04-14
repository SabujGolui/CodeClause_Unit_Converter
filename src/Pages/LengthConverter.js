import React from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";

function LengthConverter() {
  const [kilometers, setKilometers] = useState("");
  const [meters, setMeters] = useState("");
  const [centimeters, setCentimeters] = useState("");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");

  const handleKilometersChange = (e) => {
    const value = e.target.value;
    setKilometers(value);
    setMeters(value === "" ? "" : (value * 1000).toFixed(2));
    setCentimeters(value === "" ? "" : (value * 100000).toFixed(2));
    setInches(value === "" ? "" : (value * 39370.0787).toFixed(2));
    setFeet(value === "" ? "" : (value * 3280.8399).toFixed(2));
  };

  const handleMetersChange = (e) => {
    const value = e.target.value;
    setMeters(value);
    setKilometers(value === "" ? "" : (value / 1000).toFixed(2));
    setCentimeters(value === "" ? "" : (value * 100).toFixed(2));
    setInches(value === "" ? "" : (value * 39.3701).toFixed(2));
    setFeet(value === "" ? "" : (value * 3.2808).toFixed(2));
  };

  const handleCentimetersChange = (e) => {
    const value = e.target.value;
    setCentimeters(value);
    setKilometers(value === "" ? "" : (value / 100000).toFixed(2));
    setMeters(value === "" ? "" : (value / 100).toFixed(2));
    setInches(value === "" ? "" : (value * 0.3937).toFixed(2));
    setFeet(value === "" ? "" : (value * 0.0328).toFixed(2));
  };

  const handleInchesChange = (e) => {
    const value = e.target.value;
    setInches(value);
    setKilometers(value === "" ? "" : (value / 39370.0787).toFixed(2));
    setMeters(value === "" ? "" : (value / 39.3701).toFixed(2));
    setCentimeters(value === "" ? "" : (value / 0.3937).toFixed(2));
    setFeet(value === "" ? "" : (value * 0.0833).toFixed(2));
  };

  const handleFeetChange = (e) => {
    const value = e.target.value;
    setFeet(value);
    setKilometers(value === "" ? "" : (value / 3280.8399).toFixed(2));
    setMeters(value === "" ? "" : (value / 3.2808).toFixed(2));
    setCentimeters(value === "" ? "" : (value / 0.0328).toFixed(2));
    setInches(value === "" ? "" : (value * 12).toFixed(2));
  };
  return (
    <div className="page">
      <div className="row">
        <Sidebar />
        <div class="col mt-5 pt-2" id="accordions">
          <div class="component-wrapper rounded shadow">
            <div className="p-3 mb-2 bg-body rounded">
              <div className="accordion-header" id="headingOne">
                <div
                  className="accordion-button border-0 "
                  aria-controls="collapseTwo"
                >
                  <h2 className="p-2">Length Conversion</h2>
                </div>
              </div>
              <div className="ListItems border-0 ">
                <div className="accordion-body text-muted bg-white">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Kilometers
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        type="number"
                        value={kilometers}
                        onChange={handleKilometersChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Meters
                      </label>
                      <input
                        type="number"
                        value={meters}
                        onChange={handleMetersChange}
                        readOnly
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Centimeters
                      </label>
                      <input
                        type="number"
                        value={centimeters}
                        onChange={handleCentimetersChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Inches
                      </label>
                      <input
                        type="number"
                        value={inches}
                        onChange={handleInchesChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Feet
                      </label>
                      <input
                        type="number"
                        value={feet}
                        onChange={handleFeetChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LengthConverter;
