import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import skillData from "./skills";

const App = () => {
  return (
    <div className="card">
      <div>
        <Avatar />
      </div>
      <div className="data">
        <h1>Hecker Catto</h1>
        <p> Full time hecker who can hack anything in the world.</p>
        <SkillList />
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Avatar = () => {
  return <img src="/catto.png" className="avatar" alt="cat" />;
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skillData.map((skill) => (
        <Skills skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
};

const Skills = ({ skill, level, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
