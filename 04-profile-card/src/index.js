import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <h1>Hecker catto</h1>
        <p>
          Just a catto chilling in da house. Want to eat food and sleep all day
          :3 I have only one job to do meow meow all day.
        </p>
        <SkillList />
      </div>
    </div>
  );
}

const Image = () => {
  return <img className="avatar" src="/catto.png" alt="cat" />;
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

      <backgroudn></backgroudn>
    </div>
  );
};

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="hecking" color="blue" emoji="💀" />
      <Skill skill="cuteness" color="red" emoji="😏" />
      <Skill skill="big boy" color="yellow" emoji="😈" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
