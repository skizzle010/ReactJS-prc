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

  function handleStepInc() {
    setStep((s) => s + 1);
  }
  function handleStepDec() {
    setStep((s) => s - 1);
  }

  function handleCountInc() {
    setCount((s) => s + step);
  }
  function handleCountDec() {
    setCount((s) => s - step);
  }

  return (
    <>
      <div className="component center-row">
        <button className="button" onClick={handleStepDec}>
          -
        </button>
        <h1>Step: {step}</h1>
        <button className="button" onClick={handleStepInc}>
          +
        </button>
      </div>
      <div className="component center-row">
        <button className="button" onClick={handleCountDec}>
          -
        </button>
        <h1>Count: {count}</h1>
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
      </div>
    </>
  );
};

export default App;
