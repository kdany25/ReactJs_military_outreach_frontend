import React from 'react'

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
                <span class="material-icons-sharp">group_add</span>
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
                <span class="material-icons-sharp">groups</span>
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
                <span class="material-icons-sharp">reduce_capacity</span>
              </div>
            </div>
            <small className="text-muted">Today</small>
          </div>
        </div>
      );
}
