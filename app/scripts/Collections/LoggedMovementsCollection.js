import Backbone from 'backbone';
import loggedMovement from '../Models/loggedMovementModel';
import store from '../store';


export default Backbone.Collection.extend({
  model: loggedMovement,
  url: 'https://api.backendless.com/v1/data/Movements',

parse(data) {
  return data.data
}

});
