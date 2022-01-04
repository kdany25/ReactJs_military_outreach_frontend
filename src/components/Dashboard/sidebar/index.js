import React from "react";
import "./Style/sidebar.css";

const Sidebar = () => {
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
            <span class="material-icons-sharp">update</span>
            <h3>Update</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">fact_check</span>
            <h3>Actions</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">insights</span>
            <h3>Analytics</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">summarize</span>
            <h3>Report</h3>
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

export default Sidebar;
