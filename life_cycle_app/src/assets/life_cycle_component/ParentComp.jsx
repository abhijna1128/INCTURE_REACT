import React, { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: Math.random(),
      counter: 0,
    };
  }

  componentDidMount() {
    this.appStateInterval = setInterval(() => {
      this.setState({ appState: Math.random() });
    }, 5000);

    this.counterInterval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.appStateInterval);
    clearInterval(this.counterInterval);
    console.log("Child Component:Component Will Unmount")
  }

  render() {
    return (
      <div>
        <p>App State: {this.state.appState}</p>
        <ChildComp counter={this.state.counter} />
      </div>
    );
  }
}

export default ParentComp;
