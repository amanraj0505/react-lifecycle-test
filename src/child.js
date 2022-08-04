import React from "react";
import "./App.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
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
    //we can compare the state or props witht eh previous props and accordingly retrun true and false to avoid unnecessary renering
    return true;
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
