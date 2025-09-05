import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreColleges() {
  const colleges = [
    { name: "Delhi University", course: "Arts & Commerce" },
    { name: "IIT Bombay", course: "Engineering" },
    { name: "AIIMS Delhi", course: "Medical" },
  ];

  const [query, setQuery] = useState("");

  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">🏫 Explore Colleges</h1>
        <input
          type="text"
          className="college-search"
          placeholder="Search by college name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="college-list">
          {filtered.map((c, i) => (
            <div key={i} className="college-item">
              <strong>{c.name}</strong> – {c.course}
            </div>
          ))}
        </div>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
