import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleUndo = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="card p-3 shadow-lg" style={{ width: "22rem" }}>
      <h2 className="text-center mb-3">React Calculator</h2>

      <input
        type="text"
        className="form-control text-end mb-3"
        value={input}
        readOnly
      />

      <div className="row g-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item, index) => (
          <div key={index} className="col-3">
            <button
              className="btn btn-primary w-100"
              onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
            >
              {item}
            </button>
          </div>
        ))}


        <div className="col-6">
          <button className="btn btn-warning w-100" onClick={handleUndo}>
            Undo
          </button>
        </div>


        <div className="col-6">
          <button className="btn btn-danger w-100" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
