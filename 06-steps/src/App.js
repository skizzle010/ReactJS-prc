import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step === 3) return;
    setStep(step + 1);
  };

  return (
    console.log(step),
    (
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">
          Step {step} : {messages[step - 1]}
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => handlePrevious()}
          >
            Previouis
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
};

export default App;
