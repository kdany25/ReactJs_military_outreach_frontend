import React from "react";
// import "./Style/layout.css";

const Profile = () => {
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span class="material-icons-sharp">linear_scale</span>
        </button>
        <div className="theme-toggler">
          <span class="material-icons-sharp active">light_mode</span>
          <span class="material-icons-sharp">dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              <b>k.dany</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="profile.png" alt="" />
          </div>
        </div>
      </div>
     
     </div>
  );
};

export default Profile;
