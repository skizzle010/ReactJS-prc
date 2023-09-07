import { useState } from "react";

function App() {
  return (
    <>
      <Step />
    </>
  );
}

const Step = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountInc() {
    setCount((s) => s + step);
  }
  function handleCountDec() {
    setCount((s) => s - step);
  }
  function handleReset() {
    setCount((s) => 0);
    setStep((s) => 1);
  }

  return (
    <>
      <div className="component center-row">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <div>{step}</div>
      </div>
      <div className="component center-row">
        <button className="button" onClick={handleCountDec}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="button" onClick={handleCountInc}>
          +
        </button>
      </div>
      <div className="container">
        <p className="date-text">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from Today is `
              : `${Math.abs(count)} ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        <div>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
