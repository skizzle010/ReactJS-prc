function App() {
  return (
    <>
      <Step />
    </>
  );
}

const Step = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="component center-row">
        <button className="button">-</button>
        <h1>Step: 1</h1>
        <button className="button">+</button>
      </div>
      <div className="component center-row">
        <button className="button">-</button>
        <h1>Count: 1</h1>
        <button className="button">+</button>
      </div>
      <div>
        <p>Today is Mon Jun 21 2027 </p>
      </div>
    </>
  );
};

export default App;
