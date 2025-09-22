import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import FloatingButton from "./components/FloatingButton.jsx";

import Home from "./pages/Home.jsx";
import CareerLanding from "./pages/CareerLanding.jsx";
import DiscoverPath from "./pages/DiscoverPath.jsx";
import MapFuture from "./pages/MapFuture.jsx";
import ExploreColleges from "./pages/ExploreColleges.jsx";
import StayOnTrack from "./pages/StayOnTrack.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerLanding />} />
          <Route path="/career/discover" element={<DiscoverPath />} />
          <Route path="/career/map" element={<MapFuture />} />
          <Route path="/career/colleges" element={<ExploreColleges />} />
          <Route path="/career/track" element={<StayOnTrack />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <FloatingButton />
    </>
  );
}
