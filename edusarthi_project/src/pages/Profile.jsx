import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">👤 Profile</h1>
        <input
          className="profile-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="Your career goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="profile-preview">
          <p><b>Name:</b> {name || "Not set"}</p>
          <p><b>Goal:</b> {goal || "Not set"}</p>
        </div>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
