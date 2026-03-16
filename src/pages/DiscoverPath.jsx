import { useEffect, useState } from "react";
import { askAI } from "../lib/groq";

export default function DiscoverPath() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);

      const text = await askAI(
        "Generate 5 aptitude career questions for Indian students choosing between Arts, Science, Commerce. Return JSON like [{\"q\":\"question\",\"key\":\"id\"}]"
      );

      try {
        const json = JSON.parse(text);
        setQuestions(json);
      } catch {
        setQuestions([
          { q: "Do you enjoy solving maths problems?", key: "math" },
          { q: "Do you enjoy history and literature?", key: "arts" }
        ]);
      }

      setLoading(false);
    }

    fetchQuestions();
  }, []);

  function choose(val) {
    setAnswers(a => ({ ...a, [questions[index].key]: val }));

    if (index < questions.length - 1) setIndex(i => i + 1);
    else setSubmitted(true);
  }

  if (loading) return <div className="container">Loading quiz…</div>;

  return (
    <div className="container">
      <div className="quiz card">

        {!submitted && questions.length > 0 && (
          <>
            <h3>{questions[index].q}</h3>

            <div style={{ marginTop: 12 }}>
              <button onClick={() => choose("yes")}>Yes</button>
              <button onClick={() => choose("no")}>No</button>
              <button onClick={() => choose("maybe")}>Maybe</button>
            </div>

            <small>{index + 1}/{questions.length}</small>
          </>
        )}

        {submitted && (
          <div>
            <h3>Your Answers</h3>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
          </div>
        )}

      </div>
    </div>
  );
}