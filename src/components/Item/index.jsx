import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: "white",
  };
  handleMouse = (flag) => {
    return () => {
      if (flag) {
        this.setState({ mouse: "pink" });
      } else {
        this.setState({ mouse: "white" });
      }
    };
  };
  handleCheck = (id) => {
    return (e) => {
      this.props.changeTodo(id, e.target.checked);
    };
  };
  handleDelete=(id)=>{
    return ()=>{
      this.props.singleDelete(id)
    }
  }
  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger">删除</button>
      </li>
    );
  }
}
