import React from 'react'
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import store from '../../store';

import LoggedWorkouts from '../LoggedWorkouts';
import CycleWorkouts from '../CycleWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      cycle: {
        cycleWorkouts: []
      },
      loggedWorkout: store.loggedWorkout.toJSON(),
      loggedCycle: store.loggedCycle.toJSON(),
      session: store.session.toJSON(),
      start: false,
      end: false

    };
  },

  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change' , this.updateState);

    store.session.fetch();
    store.session.on('update change' , this.updateState);

    store.loggedCycle.fetch();
    store.loggedCycle.find(this.props.params);
    store.loggedCycle.on('update change' , this.updateCycleState);

    if(store.loggedCycle.find(this.props.params) === undefined) {
      store.loggedCycle.fetch(this.props.params)

    }
    else {
        this.updateCycleState();
    }
  },

  componentWillUnmount() {
    store.session.off('update change' , this.updateState)
    store.loggedWorkout.off('update change' , this.updateState);
    store.loggedCycle.off('update change' , this.updateCycleState);
  },

  updateState() {
    this.setState({
      loggedWorkout: store.loggedWorkout.toJSON(),
      session: store.session.toJSON()
    })
  },

  updateCycleState() {
    if(store.loggedCycle.find(this.props.params) === undefined){
      this.setState({
      cycle: { cycleWorkouts: [] },
      loggedCycle: store.loggedCycle.toJSON()
    })
  } else {
    this.setState({
      cycle: store.loggedCycle.find(this.props.params).toJSON(),
      loggedCycle: store.loggedCycle.toJSON()
    });
  }
  },

  render() {
    let cycleLength;

    if(this.state.cycle.cycleEndDate === null || this.state.cycle.cycleStartDate === null) {

      if(this.state.start === false && this.state.end === false) {
        cycleLength = (
          <div className="cycle-page">
            <h2 className="section-title">{this.props.params.name}</h2>
            <form className="cycle-form">
              <span className="cycle-date"> Cycle Start:
                <DatePicker className="date-picker" selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart}/>
              </span>
              <span className="cycle-date"> Cycle End:
                <DatePicker className="date-picker" selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
              </span>
              <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
              <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
            </form>
            <span className="choose"> Choose from Exsisting Workouts Below or
              <Link to = "workouts"> Create A New Workout </Link>
            </span>
            <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
          </div>
        )
      } else if(this.state.start === true && this.state.end === false) {
        cycleLength = (
          <div className="cycle-page">
            <h2 className="section-title">{this.props.params.name}</h2>
            <form className="cycle-form">
              <span className="cycle-date"> Cycle Start:
                <DatePicker className="date-picker" selected={moment(this.state.cycle.cycleStartDate)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart}/>
              </span>
              <span className="cycle-date"> Cycle End:
                <DatePicker className="date-picker" selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd}/>
              </span>
              <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
              <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
            </form>
            <span className="choose"> Choose from Exsisting Workouts Below or
              <Link to = "workouts"> Create A New Workout </Link>
            </span>
            <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
          </div>
        )
      }
      else {
        cycleLength = (
          <div className="cycle-page">
            <h2 className="section-title">{this.props.params.name}</h2>
            <form className="cycle-form">
              <span className="cycle-date"> Cycle Start:
                <DatePicker className="date-picker" selected={moment(this.state.cycle.cycleStartDate)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
              </span>
              <span className="cycle-date"> Cycle End:
                <DatePicker className="date-picker" selected={moment(this.state.cycle.cycleEndDate)} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
              </span>
              <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
              <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
            </form>
            <span className="choose"> Choose from Exsisting Workouts Below or
              <Link to = "workouts"> Create A New Workout </Link>
            </span>
            <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
          </div>
      );
      }
      return (
        <div className="main-container">
        <div className="cycle-hero"></div>
          {cycleLength}
        </div>
      );
    } else {
      return (
        <div className="main-container">
        <div className="cycle-hero"></div>
        <div className="cycle-page">
          <h2 className="section-title">{this.props.params.name}</h2>
          <form className="cycle-form">
            <span className="cycle-date"> Cycle Start:
              <DatePicker className="date-picker" selected={moment(this.state.cycle.cycleStartDate)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
            </span>
            <span className="cycle-date"> Cycle End:
              <DatePicker className="date-picker" selected={moment(this.state.cycle.cycleEndDate)} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
            </span>
            <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
            <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
          </form>
          <span className="choose"> Choose from Exsisting Workouts Below or
            <Link to = "workouts"> Create A New Workout </Link>
          </span>
          <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
        </div>
        </div>
      )
    }
  },

  handleSaveCycle(e) {
    browserHistory.push('/cycles')
  },

  handleChangeStart(startDate) {
    this.setState({start: true});
    let cycleStart = startDate;
    let end = this.state.cycle.cycleEndDate
    store.loggedCycle.get(this.state.cycle.objectId).addDatesToCycle(cycleStart, end);
  },

  handleChangeEnd(endDate) {
    this.setState({end: true});
    let cycleEnd = endDate;
    let start = this.state.cycle.cycleStartDate
    store.loggedCycle.get(this.state.cycle.objectId).addDatesToCycle(start, cycleEnd);
  }
});
