var React = require('react')
var ampersandMixin = require('ampersand-react-mixin')
var assign = require('lodash.assign')

module.exports = function (Component) {
  var obj = {
    render: function () {
      return React.createElement(Component, assign({}, this.props, this.state))
    }
  }

  assign(obj, ampersandMixin)

  return React.createClass(obj)
}
