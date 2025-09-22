import { Link } from "react-router-dom";

export default function Dashboard(){
  return (
    <div className="container">
      <div className="grid-2">
        <aside className="card side-card">
          <div style={{display:"flex", gap:12, alignItems:"center"}}>
            <div style={{width:56,height:56,borderRadius:12, background: "var(--title)"}} />
            <div>
              <div style={{fontWeight:800}}>Student Name</div>
              <div style={{color:"var(--subtext)"}}>Class 12 • Science</div>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <div className="kicker">Saved Colleges</div>
            <ul style={{marginTop:8}}>
              <li>Govt Degree College A</li>
              <li>Govt Degree College C</li>
            </ul>
          </div>
        </aside>

        <section>
          <div className="card">
            <h3>Recommendations</h3>
            <div style={{marginTop:12}}>
              <div style={{fontWeight:800}}>Suggested Stream: B.Sc (Computer Science)</div>
              <div style={{color:"var(--subtext)", marginTop:8}}>Courses matched to your aptitude and interests.</div>
            </div>
          </div>

          <div style={{marginTop:12}} className="card">
            <h3>Upcoming Deadlines</h3>
            <div style={{marginTop:8}}>
              <div className="kicker">UG Admissions open - June 10, 2025</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
