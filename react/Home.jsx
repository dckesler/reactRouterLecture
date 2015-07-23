var React = require("react");
var Link = require("react-router").Link;

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  changeRoute: function(){
    this.context.router.transitionTo('/async/' + this.refs.parrot.getDOMNode().value);
  },
  render: function(){
    return (
      <div>
        <input ref="parrot"/>
        <button onClick={this.changeRoute}>Change</button>
        <Link to="async" params={{name: "name"}}></Link>
        I'm at the home route.
        {6 + 6}
      </div>
    );
  }
});

module.exports = Home;
