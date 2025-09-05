import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        fontSize: "20px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        marginLeft: "20px"
      }}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {dark ? "🌙" : "🌞"}
    </button>
  );
}
