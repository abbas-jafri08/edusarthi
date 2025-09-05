import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import { Link } from "react-router-dom";

export default function MapFuture() {
  return (
    <div>
      <Navbar />
      <div className="subpage-container">
        <h1 className="subpage-title">🗺️ Map Your Future</h1>
        <p className="subpage-text">
          See clear career paths linked to government college degrees
          to help you make informed decisions.
        </p>
        <p className="subpage-example">
          Example: If you choose Engineering, we’ll show you B.Tech government
          colleges, exams like JEE, and potential job roles.
        </p>
        <Link to="/career">
          <button className="back-btn">⬅ Back to Career Page</button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
