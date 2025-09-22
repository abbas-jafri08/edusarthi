import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="container">
      <section className="home-hero card">
        <div className="hero-left">
          <h1>EduSarthi — Your Personalized Career & Education Guide</h1>
          <p className="kicker">Make confident choices after Class 10 & 12. Discover streams, colleges and career paths tailored for you.</p>

          <div className="home-cta">
            <Link to="/career/discover" className="btn-primary">Discover Path</Link>
            <Link to="/career/colleges" className="btn">Explore Colleges</Link>
          </div>

          <div className="quick-cards" style={{marginTop:18}}>
            <div className="card card-compact" style={{minWidth:180}}>
              <div className="kicker">Quick Quiz</div>
              <div style={{fontWeight:700}}>Find suitable streams in 5 minutes</div>
            </div>
            <div className="card card-compact" style={{minWidth:180}}>
              <div className="kicker">Local Colleges</div>
              <div style={{fontWeight:700}}>See nearby government colleges</div>
            </div>
          </div>
        </div>

        <div className="hero-right card" style={{textAlign:"center"}}>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=60&auto=format&fit=crop" alt="students" style={{width:"100%", borderRadius:10}}/>
        </div>
      </section>

      <section style={{marginTop:18}}>
        <div className="card">
          <h3>How EduSarthi helps</h3>
          <p className="subtext">From aptitude quizzes to college listings and timeline reminders — everything in one place.</p>
        </div>
      </section>
    </div>
  );
}
