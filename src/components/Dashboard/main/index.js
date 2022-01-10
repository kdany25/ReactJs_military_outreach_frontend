import React from "react";
import "./Style/style.css";
import Charts from "../Chart";
import RightBar from "../RightSideBar";

const Main = () => {
  return (
    <div className="main">
      <div>
        <h1>Dashboard</h1>

        <div className="insights">
          <div className="build">
            <span class="material-icons-sharp">home_work</span>
            <div className="middle">
              <div className="left">
                <h3>Building</h3>
                <h1>455</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 7 days</small>
          </div>

          <div className="med">
            <span class="material-icons-sharp">medical_services</span>
            <div className="middle">
              <div className="left">
                <h3>Patient</h3>
                <h1>1345</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>56%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 5 days</small>
          </div>

          <div className="road">
            <span class="material-icons-sharp">add_road</span>
            <div className="middle">
              <div className="left">
                <h3>Roads</h3>
                <h1>21KM</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>46%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 4days</small>
          </div>
        </div>
        <Charts />
      </div>
      <RightBar />
    </div>
  );
};
export default Main;
