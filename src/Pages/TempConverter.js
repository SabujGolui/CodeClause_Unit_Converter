import { React, useState } from "react";
import Sidebar from "../Components/Sidebar";

function TempConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);

  function handleCelsiusChange(event) {
    const newCelsius = event.target.value;
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9) / 5 + 32);
    setKelvin(parseFloat(newCelsius) + 273.15);
  }

  function handleFahrenheitChange(event) {
    const newFahrenheit = event.target.value;
    setFahrenheit(newFahrenheit);
    setCelsius(((newFahrenheit - 32) * 5) / 9);
    setKelvin(((parseFloat(newFahrenheit) + 459.67) * 5) / 9);
  }

  function handleKelvinChange(event) {
    const newKelvin = event.target.value;
    setKelvin(newKelvin);
    setCelsius(parseFloat(newKelvin) - 273.15);
    setFahrenheit((parseFloat(newKelvin) * 9) / 5 - 459.67);
  }

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
                  <h2 className="p-2">Temperature Conversion</h2>
                </div>
              </div>
              <div className="ListItems border-0 ">
                <div className="accordion-body text-muted bg-white">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Celsius
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        type="number"
                        value={celsius}
                        onChange={handleCelsiusChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Fahrenheit
                      </label>
                      <input
                        type="number"
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Kelvin
                      </label>
                      <input
                        type="number"
                        value={kelvin}
                        onChange={handleKelvinChange}
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

export default TempConverter;
