import React from "react";
import { useState } from "react";

function UnitConverter() {
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
    <div className="container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Kilometers
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="number"
            value={kilometers}
            onChange={handleKilometersChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Meters
          </label>
          <input
            type="number"
            value={meters}
            onChange={handleMetersChange}
            readOnly
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Centimeters
          </label>
          <input
            type="number"
            value={centimeters}
            onChange={handleCentimetersChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Inches
          </label>
          <input
            type="number"
            value={inches}
            onChange={handleInchesChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Feet
          </label>
          <input
            type="number"
            value={feet}
            onChange={handleFeetChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
    </div>
  );
}

export default UnitConverter;
