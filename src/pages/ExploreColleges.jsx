import { useState } from "react";
import { askGemini } from "../lib/gemini";

export default function ExploreColleges() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState("");

  async function findColleges() {
    if (!city.trim()) return;
    setLoading(true);

    const reply = await askGemini(
      `List 5 government degree colleges in or near ${city}, India.
       For each, include: College Name, Programs, Facilities (hostel, labs, library), Medium of Instruction.
       Write in bullet points.`
    );

    setColleges(reply);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Explore Government Colleges</h2>
        <p>Search for nearby colleges offering degree programs.</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            type="text"
            placeholder="Enter your city/district"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
          />
          <button className="btn-primary" onClick={findColleges}>
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {colleges && (
          <div style={{ marginTop: 20 }}>
            <h3>Colleges in {city}</h3>
            <div>{colleges.split("\n").map((c, i) => <p key={i}>{c}</p>)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
