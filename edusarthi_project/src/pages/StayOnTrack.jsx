import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { Link } from "react-router-dom";

export default function StayOnTrack() {
  const notifications = [
    "📢 UPSC Prelims registration closes in 5 days!",
    "🎓 DU Admissions start from June 1st.",
    "💰 Scholarship XYZ deadline: March 10th.",
  ];

  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">⏰ Stay on Track</h1>
        <p className="subpage-text">Never miss important deadlines.</p>
        <ul className="notifications">
          {notifications.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
