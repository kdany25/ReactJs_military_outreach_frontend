import React from "react";

export default function Task() {
  return (
    <div className="rights">
      <div className="daily">
        <h2>Task</h2>
        <div className="item patient">
          <div className="icon">
            <span class="material-icons-sharp">task</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Make Surgery to 20patient </h3>
              <small className="text-muted">Today</small>
              <div className="bar">
                <div className="progress-line two">
                  <span></span>
                </div>
              </div>
            </div>

            <h3>17</h3>
          </div>
        </div>
        <div className="item patient">
          <div className="icon">
            <span class="material-icons-sharp">task</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Treat 500 eye Patient with</h3>
              <small className="text-muted">Today</small>
              <div className="bar">
                <div className="progress-line one">
                  <span></span>
                </div>
              </div>
            </div>

            <h3>324</h3>
          </div>
          <div></div>
        </div>
        <div className="item rod">
          <div className="icon">
            <span class="material-icons-sharp">task</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Operate 100 ouma patient </h3>
              <small className="text-muted">Today</small>
              <div className="bar">
                <div className="progress-line three">
                  <span></span>
                </div>
              </div>
            </div>

            <h3>67</h3>
          </div>
        </div>
      
      
        
        <div className="item add-records">
          <div>
            <span class="material-icons-sharp">add_task</span>
            <h3> Add Task</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
