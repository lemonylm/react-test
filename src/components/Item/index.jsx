import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: 'white',
  };
  handleMouse = (flag) => {
    return () => {
      if (flag) {
        this.setState({ mouse: 'pink' });
      }else{
        this.setState({ mouse: 'white' });

      }
    };
  };
  render() {
    const { name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse}}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    );
  }
}
