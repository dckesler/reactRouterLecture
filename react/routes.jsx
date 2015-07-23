var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Main = require("./Main.jsx");
var Home = require('./Home.jsx');
var Async = require('./Async.jsx');

var routes = (
  <Route handler={Main}>
    <Route path="/" name="home" handler={Home} />
    <Route name="async" path="/async/:name" handler={Async} />
  </Route>
);

module.exports = routes;
