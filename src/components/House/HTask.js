import React from 'react'

export default function HTask() {
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
                  <h3>Build 2 new Houses</h3>
                  <small className="text-muted">this week</small>
                  <div className="bar">
                    <div className="progress-line two">
                      <span></span>
                    </div>
                  </div>
                </div>
    
                <h3>1</h3>
              </div>
            </div>
            <div className="item patient">
              <div className="icon">
                <span class="material-icons-sharp">task</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>renew 5 houses</h3>
                  <small className="text-muted">Today</small>
                  <div className="bar">
                    <div className="progress-line one">
                      <span></span>
                    </div>
                  </div>
                </div>
    
                <h3>3</h3>
              </div>
              <div></div>
            </div>
            <div className="item rod">
              <div className="icon">
                <span class="material-icons-sharp">task</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>to build 4 Houses</h3>
                  <small className="text-muted">this week</small>
                  <div className="bar">
                    <div className="progress-line three">
                      <span></span>
                    </div>
                  </div>
                </div>
    
                <h3>2</h3>
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
