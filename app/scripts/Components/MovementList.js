import React from 'react';
import MovementSingle from './MovementSingle';

//will display a list of movements
//will need movement props


export default React.createClass({
  render() {

    console.log(this.props)

    let movements = this.props.movements.map((movement, i ,arr) => {
      return <MovementSingle key={i} movement={movement}/>;
    });
  

    return (
        <ul className="movement-list">
          {movements}
        </ul>
    );
  }
});