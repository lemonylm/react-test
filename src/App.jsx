import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";
export default class App extends Component {
  state = {
    todos: [],
  };
  headerInput = (name) => {
    const { todos } = this.state;
    var todoObj = { id: Date.now(), name: name, done: false };
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header headerInput={this.headerInput} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
