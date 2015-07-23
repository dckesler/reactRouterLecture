var React = require("react");
var Router = require('react-router');
var axios = require('axios');
var q = require('q');

var Async = React.createClass({
  mixins: [Router.State],
  async: function(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+this.refs.lat.getDOMNode().value+'&lon='+this.refs.lon.getDOMNode().value)
      .then(function(response){
        console.log(response);
      });
  },
  render: function(){
    return (
      <div asdasdfasdf="adsdfsdaf">
        Async route
        <input ref="lat"/>
        <input ref="lon"/>
        <button onClick={this.async}>Action</button>
        {this.getParams().name}
      </div>
    );
  }
});

module.exports = Async;
