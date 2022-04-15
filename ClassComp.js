import { Component } from "react";
import vars from "./func";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  // addNumber = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // };

  addNumber = () => {
    this.setState({ counter: (this.state.counter += 1) });
    this.setState({ counter: (this.state.counter += 1) });
  };
  reset = () => {
    setTimeout(() => {
      console.log(this.state.counter);
      // alert(this.state.counter);
    }, 2000);
  };
  subNumber = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    return (
      <div className="classComp">
        <h2>Class Component</h2>
        <h1
          style={{
            color:
              vars.colors[
                this.state.counter >= 0
                  ? this.state.counter
                  : Math.abs(this.state.counter)
              ]
          }}
        >
          {this.state.counter}
        </h1>
        <button onClick={this.subNumber}>Subtract</button>
        <button onClick={this.addNumber}>Add</button>
        <button onClick={this.reset}>timer</button>
      </div>
    );
  }
}
