import React from "react";
import "./App.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      currentValue: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: ", state, props);
    // called before shouldcomponentupdate and render and we can update the state from the props before the render method is called.
    // state is returned after we update the state with the props
    return 0;
  }
  componentDidUpdate(props, state, snapShot) {
    console.log(
      "componentDidUpdate: (Props)",
      props,
      " (State)",
      state,
      "Snapshot Returned from getSnapShotBeforeUpdate: ",
      snapShot
    );
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log(
      "ShouldComponentUpdate: (Props)",
      prevProps,
      "(State)",
      prevState
    );
    //we can compare the state or props with previous props and accordingly retrun true and false to avoid unnecessary renering
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: (previous props)",
      prevProps,
      " (Current Props)",
      this.props.data
    );
    console.log(
      "getSnapShotBeforeUpdate (previous state)",
      prevState,
      "(Current State)",
      this.state.currentValue
    );
    return prevState.currentValue * 10;
  }
  render() {
    console.log("render");
    return (
      <div>
        Count props passed from parent: {this.props.data}
        <div>
          <br></br>
          State from the child: {this.state.currentValue}
          <br></br>
          <br></br>
          <button
            onClick={() => {
              this.setState({ currentValue: this.state.currentValue + 1 });
            }}
          >
            Child State Update
          </button>
        </div>
      </div>
    );
  }
}
export default Child;
