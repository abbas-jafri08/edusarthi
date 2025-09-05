import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">📊 Dashboard</h1>
        <p className="subpage-text">Quick access to your career tools:</p>
        <ul className="dashboard-links">
          <li><Link to="/career/colleges">🏫 Explore Colleges</Link></li>
          <li><Link to="/career/discover">📝 Career Quiz</Link></li>
          <li><Link to="/career/track">⏰ Notifications</Link></li>
          <li><Link to="/career/map">🗺️ Map Your Future</Link></li>
          <li><Link to="/career/start">🚀 Start Career Journey</Link></li>
        </ul>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
