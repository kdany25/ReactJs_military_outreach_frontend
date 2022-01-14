import React from "react";
// import "./Style/layout.css";

const sidebarLayout = () => {
  return (
    <div className="container">
      <div className="aside">
        <div className="top">
          <div className="logo">
            <img src="loogo.jpg" />
            <h2>
              K<span className="danger">D</span>
            </h2>
          </div>
          <div className="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="side">
          <a href="#">
            <span class="material-icons-sharp">dashboard</span>
            <h3>Dashboard</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">health_and_safety</span>
            <h3>Health</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">apartment</span>
            <h3>Houses</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">alt_route</span>
            <h3>Other activities</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">summarize</span>
            <h3>Report</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">contact_mail</span>
            <h3>Contact Us</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebarLayout;
