//will display today's workout
//pull from workout collection
// will display calendar

import React from 'react';

export default React.createClass ({
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-profile">
          <span> Brian Flannery </span>
        </div>
        <div className="sidebar-wod">
          <h3>Todays Workout</h3>
        </div>
        <div className ="sidebar-calendar">
          <h3> Todays Date </h3>
        </div>
      </div>
    );
  }
});
