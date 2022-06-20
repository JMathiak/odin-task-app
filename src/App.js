import React, { Component } from "react";
import logo from "./logo.svg";
import Overview from "./components/overview";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
    };
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
    console.log(this.state.tasks);
  }

  updateTask(e) {
    console.log(e.target.value);
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.task}
          onChange={this.updateTask}
        ></input>
        <button onClick={this.addTask}>Add Task</button>
        <div>
          <Overview taskList={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
