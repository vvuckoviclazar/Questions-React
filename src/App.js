import { useState } from "react";
import questionsData from "./data";
import "./index.css";

function App() {
  const [questions, setQuestions] = useState(questionsData);

  const toggleQuestion = (id) => {
    const updated = questions.map((data) =>
      data.id === id ? { ...data, isExpanded: !data.isExpanded } : data
    );
    setQuestions(updated);
  };

  return (
    <section className="list">
      <h1>Questions</h1>
      <ul className="questions-list">
        {questions.map((question) => (
          <li key={question.id}>
            <div className="question-div">
              <h4>{question.title}</h4>
              <button
                className="info-btn"
                onClick={() => toggleQuestion(question.id)}
              >
                {question.isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                )}
              </button>
            </div>
            {question.isExpanded && <p>{question.info}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
