var React = require('React');
var Relay = require('Relay');

var MyClass = React.createClass({
  getInitialState: function() {
    var x = this.props.setParams({
      a: 'b'
    }, () => {});
  }
});

class Thing extends React.Component {

  componentWillMount() {
    var x = this.props.setParams({
      a: 'b'
    });
  }

}