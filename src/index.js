import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="hossainUddin.jpeg" alt="avatar image" />;
}
function Intro() {
  return (
    <div>
      <h1>Hossain Uddin</h1>
      <p style={{ fontSize: "11px" }}>
        I'm a web developer skilled in HTML, CSS, and JavaScript. I create
        responsive and user-friendly websites. Let's bring your ideas to life
        online
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="green" />
      <Skill skill="Javascript" emoji="💪" color="#3498DB  " />
      <Skill skill="Expressjs" emoji="👦" color="#73C6B6 " />
      <Skill skill="Html+Css" emoji="💪" color="#839192 " />
      <Skill skill="Nodejs" emoji="👍" color="#3498DB " />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
