import { useEffect, useState } from "react";
import { askGemini } from "../lib/gemini";

export default function DiscoverPath() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      const text = await askGemini(
        "Generate 5 aptitude/interest-based career guidance questions for Indian students choosing between Arts, Science, Commerce, and Vocational. Return JSON array of {q: string, key: string}."
      );
      try {
        const json = JSON.parse(text);
        setQuestions(json);
      } catch {
        setQuestions([
          { q: "Do you like solving maths problems?", key: "math" },
          { q: "Do you enjoy reading history & literature?", key: "arts" },
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
            <div className="options" style={{ marginTop: 12 }}>
              <div className="option" onClick={() => choose("yes")}>Yes</div>
              <div className="option" onClick={() => choose("no")}>No</div>
              <div className="option" onClick={() => choose("maybe")}>Maybe</div>
            </div>
            <small>{index + 1}/{questions.length}</small>
          </>
        )}

        {submitted && (
          <div>
            <h3>Thanks! Your answers:</h3>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
