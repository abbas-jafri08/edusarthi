import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import FloatingButton from "../components/FloatingButton.jsx";

export default function CareerLanding() {
  const cards = [
    {
      title: "Start Your Career Journey",
      desc: "Get personalized guidance, reminders, alerts for govt. jobs, colleges, and training courses.",
      path: "/career/start",
    },
    {
      title: "Discover Your Path",
      desc: "Take aptitude and interest-based quizzes to discover your ideal streams and career options.",
      path: "/career/discover",
    },
    {
      title: "Map Your Future",
      desc: "See clear career paths linked to government college degrees to help you make better decisions.",
      path: "/career/map",
    },
    {
      title: "Explore Colleges",
      desc: "Find institutions near you with all the details you need, including admissions and facilities.",
      path: "/career/colleges",
    },
    {
      title: "Stay on Track",
      desc: "Receive alerts for key admissions, scholarship deadlines, and exam dates for government institutions.",
      path: "/career/track",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="career-container">
        <h1 className="career-title">Let's build future</h1>
        <p className="career-subtitle">
          Your trusted AI-powered companion for Sarkari career guidance,
          government colleges, and personalized educational planning.
        </p>

        {/* Grid of Cards */}
        <div className="card-grid">
          {cards.map((c, i) => (
            <Link key={i} to={c.path} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home Button */}
        <Link to="/">
          <button style={{
            marginTop: "40px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "1px solid #2f8dd6",
            background: "#fff",
            color: "#2f8dd6",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            ⬅ Back to Home
          </button>
        </Link>
      </div>
      <FloatingButton />
    </div>
  );
}
