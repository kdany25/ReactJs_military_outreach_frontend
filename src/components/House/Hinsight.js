import React from "react";

export default function Hinsight() {
  return (
    <div className="Hinsights">
      <div className="new-patient">
        <div className="middle">
          <div className="left">
            <h2>2</h2>
            <h4>New Houses</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">gite</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>
      <div className="patient">
        <div className="middle">
          <div className="left">
            <h2>4</h2>
            <h4>renewed houses</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">room_preferences</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>

      <div className="total">
        <div className="middle">
          <div className="left">
            <h2>14</h2>
            <h4>Total Houses</h4>
          </div>
          <div className="number">
            <span class="material-icons-sharp">maps_home_work</span>
          </div>
        </div>
        <small className="text-muted">Today</small>
      </div>
    </div>
  );
}
