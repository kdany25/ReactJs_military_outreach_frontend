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
      {/* ----------------- */}
      <div className="daily">
        <h2>Daily Analytics</h2>
        <div className="item houses">
          <div className="icon">
            <span class="material-icons-sharp">gite</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>House Built</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>324</h3>
          </div>
        </div>
        <div className="item patient">
          <div className="icon">
            <span class="material-icons-sharp">bloodtype</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Patient</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+54%</h5>
            <h3>675</h3>
          </div>
        </div>
        <div className="item rod">
          <div className="icon">
            <span class="material-icons-sharp">edit_road</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Roads</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>45Km</h3>
          </div>
        </div>
        <div className="item add-record">
          <div>
            <span class="material-icons-sharp">add_circle_outline</span>
            <h3> Add record</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
