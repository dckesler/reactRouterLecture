var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>This is the man page and woaman.</h1>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = Main;
