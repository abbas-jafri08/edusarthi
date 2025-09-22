import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.jsx";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand">
          <div className="brand-mark" aria-hidden>ES</div>
          <NavLink to="/" className="brand-name">EduSarthi</NavLink>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Main Navigation">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/career" className="nav-link">Discover</NavLink>
          <NavLink to="/career/map" className="nav-link">Roadmap</NavLink>
          <NavLink to="/career/colleges" className="nav-link">Colleges</NavLink>
          <NavLink to="/career/track" className="nav-link">Timeline</NavLink>
          <NavLink to="/chatbot" className="nav-link">Advisor</NavLink>
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        </nav>

        <div className="nav-actions">
          <DarkModeToggle />
          <button className="btn sign-in">Sign In</button>
        </div>
      </div>
    </header>
  );
}
