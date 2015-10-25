"use strict";

var React = require('react');

var Container = React.createClass({
  displayName: "Container",

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      "div",
      { id: "testPreLoad" },
      "some content"
    );
  }
});

var ProjectsLoader = React.createClass({
  displayName: "ProjectsLoader",

  getInitialState: function getInitialState() {
    return {};
  },
  _handleImageLoadError: function _handleImageLoadError() {
    console.log("_handleImageLoadError");
  },
  _handleImageLoadSuccess: function _handleImageLoadSuccess() {
    console.log("_handleImageLoadError");
  },
  render: function render() {

    var loadingIndicator = React.createElement(
      "div",
      null,
      "Loading..."
    );
    var images = ["images/brazil1.jpg", "images/brazil2.jpg"];

    var container = React.createElement(Container, null);

    var Preload = require('react-preload').Preload;
    // var Preload = require('react-preload');

    return React.createElement(
      Preload,
      {
        loadingIndicator: loadingIndicator,
        images: images,
        autoResolveDelay: 3000,
        onError: this._handleImageLoadError,
        onSuccess: this._handleImageLoadSuccess,
        resolveOnError: true,
        mountChildren: true
      },
      React.createElement(Container, null)
    );
  }
});

React.render(React.createElement(ProjectsLoader, null), document.getElementById('container'));

//   React.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('container')
// );