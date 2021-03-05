import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  handleKeyUp = (e) => {
    const { headerInput } = this.props;
    if (e.keyCode === 13) {
      e.target.value.trim()
        ? headerInput(e.target.value.trim())
        : alert("请勿输入空信息");
      e.target.value = "";
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
