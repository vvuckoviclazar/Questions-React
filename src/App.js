import { useState } from "react";
import questionsData from "./data";
import "./index.css";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [questions] = useState(questionsData);

  return (
    <section className="list">
      <h1>Questions</h1>
      <ul className="questions-list">
        {questions.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default App;
