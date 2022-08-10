import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef;
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButton = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000",
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000",
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          ref={(ref) => (this.input = ref)}
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButton}>확인</button>
      </div>
    );
  }
}

export default RefSample;
