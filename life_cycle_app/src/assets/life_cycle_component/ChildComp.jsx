import React, { Component } from 'react';

class ChildComp extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.counter !== this.props.counter;
  }

  render() {
    console.log('ChildComponent rendered with counter:', this.props.counter);
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
      </div>
    );
  }
}

export default ChildComp;
