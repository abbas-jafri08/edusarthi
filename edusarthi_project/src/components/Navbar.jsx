import DarkModeToggle from "./DarkModeToggle.jsx";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px", background: "#2f8dd6", color: "#fff", display: "flex", alignItems: "center" }}>
      <a href="/" style={{ marginRight: "20px", color: "#fff", textDecoration: "none" }}>EduSarthi</a>
      <a href="/career" style={{ marginRight: "20px", color: "#fff" }}>Careers</a>
      <a href="/dashboard" style={{ marginRight: "20px", color: "#fff" }}>Dashboard</a>
      <DarkModeToggle />
    </nav>
  );
}
