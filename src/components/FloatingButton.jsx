import { Link } from "react-router-dom";

export default function FloatingButton() {
  return (
    <Link to="/chatbot" className="floating-btn" aria-label="Chat with EduSarthi">
      💬
    </Link>
  );
}
