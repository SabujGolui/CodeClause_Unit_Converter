import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

function WeightConverter() {
  const [grams, setGrams] = useState(0);
  const [kilograms, setKilograms] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [ounces, setOunces] = useState(0);

  function handleGramsChange(event) {
    const newGrams = event.target.value;
    setGrams(newGrams);
    setKilograms(parseFloat(newGrams) / 1000);
    setPounds(parseFloat(newGrams) * 0.00220462);
    setOunces(parseFloat(newGrams) * 0.035274);
  }

  function handleKilogramsChange(event) {
    const newKilograms = event.target.value;
    setKilograms(newKilograms);
    setGrams(parseFloat(newKilograms) * 1000);
    setPounds(parseFloat(newKilograms) * 2.20462);
    setOunces(parseFloat(newKilograms) * 35.274);
  }

  function handlePoundsChange(event) {
    const newPounds = event.target.value;
    setPounds(newPounds);
    setGrams(parseFloat(newPounds) * 453.592);
    setKilograms(parseFloat(newPounds) / 2.20462);
    setOunces(parseFloat(newPounds) * 16);
  }

  function handleOuncesChange(event) {
    const newOunces = event.target.value;
    setOunces(newOunces);
    setGrams(parseFloat(newOunces) * 28.3495);
    setKilograms(parseFloat(newOunces) / 35.274);
    setPounds(parseFloat(newOunces) * 0.0625);
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
                  <h2 className="p-2">Weight Conversion</h2>
                </div>
              </div>
              <div className="ListItems border-0 ">
                <div className="accordion-body text-muted bg-white">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Grams
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        type="number"
                        value={grams}
                        onChange={handleGramsChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Kilograms
                      </label>
                      <input
                        type="number"
                        value={kilograms}
                        onChange={handleKilogramsChange}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Pounds
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputPassword1"
                        type="number"
                        value={pounds}
                        onChange={handlePoundsChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Ounces
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputPassword1"
                        type="number"
                        value={ounces}
                        onChange={handleOuncesChange}
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

export default WeightConverter;
