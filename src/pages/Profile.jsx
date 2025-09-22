import { useState } from "react";

export default function Profile(){
  const [profile, setProfile] = useState({ name:"", cls:"", interests:"" });
  return (
    <div className="container">
      <div className="card">
        <h3>Profile</h3>
        <div style={{marginTop:12, display:"flex", flexDirection:"column", gap:8}}>
          <input placeholder="Full name" value={profile.name} onChange={(e)=>setProfile({...profile, name:e.target.value})} className="card-compact"/>
          <input placeholder="Class (e.g., 12th)" value={profile.cls} onChange={(e)=>setProfile({...profile, cls:e.target.value})} className="card-compact"/>
          <input placeholder="Interests (comma separated)" value={profile.interests} onChange={(e)=>setProfile({...profile, interests:e.target.value})} className="card-compact"/>
          <button className="btn-primary" onClick={()=>alert("Saved (mock)")}>Save</button>
        </div>
      </div>
    </div>
  );
}
