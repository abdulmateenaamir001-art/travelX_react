import React from "react";

function TeamMember({ name, role, image }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="team-card">
        <img src={image} className="card-img-top team-img" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;