import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscoverPath() {
  const questions = [
    { q: "Do you enjoy solving math and science problems?", science: 1 },
    { q: "Do you like reading about history, literature, or arts?", arts: 1 },
    { q: "Are you interested in money, trade, and finance?", commerce: 1 },
  ];

  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  function handleAnswer(choice, index) {
    const newAnswers = [...answers];
    newAnswers[index] = choice;
    setAnswers(newAnswers);
  }

  function calculateResult() {
    let scores = { science: 0, commerce: 0, arts: 0 };
    answers.forEach((ans, i) => {
      if (ans === "yes") {
        if (questions[i].science) scores.science++;
        if (questions[i].commerce) scores.commerce++;
        if (questions[i].arts) scores.arts++;
      }
    });
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    setResult(top ? `🎯 Recommended Path: ${top[0].toUpperCase()}` : "Take the quiz!");
  }

  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">📝 Discover Your Path</h1>
        {questions.map((item, i) => (
          <div key={i} className="quiz-question">
            <p>{item.q}</p>
            <div className="quiz-buttons">
              <button onClick={() => handleAnswer("yes", i)}>Yes</button>
              <button onClick={() => handleAnswer("no", i)}>No</button>
            </div>
          </div>
        ))}
        <button onClick={calculateResult} className="back-btn">See Result</button>
        {result && <p className="result-text">{result}</p>}

        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
