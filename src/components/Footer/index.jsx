import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handleDelete = () => {
    this.props.deleteAll();
  };
  render() {
    const { todos } = this.props;
    const total = todos.length;
    const doneCount = todos.reduce((acc, cur) => {
      if (cur.done === true) {
        acc++;
      }
      return acc;
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleDelete} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
