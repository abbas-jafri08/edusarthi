import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        {/* Girl image from public folder */}
        <img src="/image.png" alt="Student" className="home-img" />

        {/* Heading */}
        <h1 className="home-title">Welcome Students!</h1>

        {/* Subtitle */}
        <p className="home-subtitle">
          Your gateway to learning and academic success.
        </p>

        {/* Get Started button */}
        <Link to="/career">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>

      <FloatingButton />
    </div>
  );
}
