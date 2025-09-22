import { useState } from "react";
import { askGemini } from "../lib/gemini";

export default function StayOnTrack() {
  const [classLevel, setClassLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState("");

  async function getTimeline() {
    if (!classLevel.trim()) return;
    setLoading(true);

    const reply = await askGemini(
      `Generate a timeline of important dates for an Indian student in ${classLevel}.
       Include: Admission deadlines, scholarship applications, entrance tests.
       Format as a list with months.`
    );

    setTimeline(reply);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Stay on Track</h2>
        <p>Check admission and scholarship timelines.</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            type="text"
            placeholder="e.g., Class 12 Commerce"
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value)}
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
          />
          <button className="btn-primary" onClick={getTimeline}>
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>

        {timeline && (
          <div style={{ marginTop: 20 }}>
            <h3>Timeline</h3>
            <div>{timeline.split("\n").map((t, i) => <p key={i}>{t}</p>)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
