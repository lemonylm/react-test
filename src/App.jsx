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
  changeTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (id === item.id) {
        return { ...item, done: done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newTodos });
  };
  singleDelete = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  deleteAll = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.done === false;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header headerInput={this.headerInput} />
          <List
            todos={todos}
            changeTodo={this.changeTodo}
            singleDelete={this.singleDelete}
          />
          <Footer todos={todos} deleteAll={this.deleteAll} />
        </div>
      </div>
    );
  }
}
