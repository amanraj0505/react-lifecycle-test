import React from "react";
import "./App.css";
import Child from "./child";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }
  render() {
    return (
      <div>
        <Child data={this.state.data}></Child>
        <br></br>
        <button
          onClick={() => {
            this.setState({ data: this.state.data + 1 });
          }}
        >
          Parent State Update
        </button>
      </div>
    );
  }
}
export default App;
