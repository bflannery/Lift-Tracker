import React from 'react';
import store from '../../store';

import MovementSearch from '../MovementSearch';
// import LoggedMovements from '../LoggedMovements';


export default React.createClass ({

  getInitialState() {
    return {
      workout: {},

    }
  },

  componentDidMount() {
    store.loggedWorkout.find(this.props.params);
    store.loggedWorkout.on('change update', this.updateState);

    if(store.loggedWorkout.find(this.props.params) === undefined) {
      store.loggedWorkout.fetch(this.props.params)
    } else {
        this.updateState();
    }
  },
    componentWillUnmount() {
      store.loggedWorkout.off('update change' , this.updateState);
  },

  updateState() {
      if(store.loggedWorkout.find(this.props.params) !== undefined) {
        this.setState({workout: store.loggedWorkout.find(this.props.params).toJSON()});
      }
    },

  render () {
    console.log(this.props)
    return (
      <div className="main-container">
        <h2>{this.props.params.name}</h2>

        <MovementSearch workoutId={this.state.workout.objectId}/>
      </div>
    );
  }
});