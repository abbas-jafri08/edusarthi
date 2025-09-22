import { Link } from "react-router-dom";

export default function CareerLanding(){
  return (
    <div className="container">
      <div className="card">
        <h2>Career Guidance</h2>
        <p className="kicker">Choose your next step carefully — explore streams, career maps and more.</p>

        <div style={{display:"flex", gap:12, marginTop:12}}>
          <Link to="/career/discover" className="btn-primary">Take Quiz</Link>
          <Link to="/career/map" className="btn">See Roadmap</Link>
        </div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h3>Popular Paths</h3>
        <div className="flow-grid" style={{marginTop:12}}>
          <div className="flow-card card">Science → B.Sc → Research / IT</div>
          <div className="flow-card card">Commerce → B.Com → Finance / Accounts</div>
          <div className="flow-card card">Arts → B.A → Teaching / Civil Services</div>
        </div>
      </div>
    </div>
  );
}
