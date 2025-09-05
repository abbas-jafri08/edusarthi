import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CareerLanding from "./pages/CareerLanding.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import StartCareer from "./pages/StartCareer.jsx";
import DiscoverPath from "./pages/DiscoverPath.jsx";
import MapFuture from "./pages/MapFuture.jsx";
import ExploreColleges from "./pages/ExploreColleges.jsx";
import StayOnTrack from "./pages/StayOnTrack.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<CareerLanding />} />
      <Route path="/career/start" element={<StartCareer />} />
      <Route path="/career/discover" element={<DiscoverPath />} />
      <Route path="/career/map" element={<MapFuture />} />
      <Route path="/career/colleges" element={<ExploreColleges />} />
      <Route path="/career/track" element={<StayOnTrack />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}
