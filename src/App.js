import { useState } from "react";
import questionsData from "./data";
import "./index.css";

function App() {
  const [questions] = useState(questionsData);

  return (
    <section className="list">
      <h1>Questions</h1>
      <ul className="questions-list">
        {questions.map((question) => (
          <li key={question.id}>
            <div className="question-div">
              <h4>{question.title}</h4>
              <button className="info-btn">+</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
