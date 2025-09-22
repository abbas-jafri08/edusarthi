import { useState } from "react";
import { askGemini } from "../lib/gemini";

export default function MapFuture() {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");

  async function generateRoadmap() {
    if (!course.trim()) return;
    setLoading(true);

    const reply = await askGemini(
      `Create a roadmap for an Indian student pursuing ${course}.
       Include: 1) Careers, 2) Government exams/private jobs, 3) Higher studies/skills.
       Format as bullet points.`
    );

    setRoadmap(reply);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2>Course-to-Career Mapping</h2>
        <p>Enter a degree program to see possible career paths.</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            type="text"
            placeholder="e.g., B.Sc. Computer Science"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
          />
          <button className="btn-primary" onClick={generateRoadmap}>
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>

        {roadmap && (
          <div style={{ marginTop: 20 }}>
            <h3>Career Roadmap</h3>
            <div className="roadmap-output">
              {roadmap.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
