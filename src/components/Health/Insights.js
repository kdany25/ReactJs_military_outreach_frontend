import React from "react";

export default function Insights() {
  return (
    <div className="insights">
      <div className="new-patient">
        <div className="middle">
          <div className="left">
            <h2>125</h2>
            <h4>New Patient</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">group_add</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>
      <div className="patient">
        <div className="middle">
          <div className="left">
            <h2>765</h2>
            <h4>Patient</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">groups</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>

      <div className="total">
        <div className="middle">
          <div className="left">
            <h2>7654</h2>
            <h4>Total Patient</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">reduce_capacity</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>
    </div>
  );
}
