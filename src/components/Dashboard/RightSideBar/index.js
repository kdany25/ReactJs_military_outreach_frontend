import React from "react";
import "./Style/rightbar.css";

const RightBar = () => {
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
      <div className="recent-updated">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src="recent1.PNG" />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>Lorem Ipsum es simplemente el texto de relleno de las
              </p>
              <small className="texted-muted">5 hours ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src="recent2.PNG" />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>Lorem Ipsum es simplemente el texto de relleno de las
              </p>
              <small className="texted-muted">2 day ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src="recent3.PNG" />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>Lorem Ipsum es simplemente el texto de relleno de las
              </p>
              <small className="texted-muted">10 hours ago</small>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RightBar;
