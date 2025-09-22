import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { Link } from "react-router-dom";

export default function StartCareer() {
  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">🚀 Start Your Career Journey</h1>
        <p className="subpage-text">
          Get personalized guidance, reminders, alerts for government jobs,
          colleges, and training courses.
        </p>
        <p className="subpage-example">
          Example: Create your profile, select your interests, and receive tailored
          notifications for upcoming opportunities.
        </p>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
