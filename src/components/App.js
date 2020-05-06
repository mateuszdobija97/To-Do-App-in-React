import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
  counter = 10;
  state = {
    tasks: [
      {
        id: 0,
        name: 'Iść na siłownię',
        date: '2020-06-09',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        name: 'Zrobić zakupy',
        date: '2020-05-11',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        name: 'Zagrać w Counter Strike',
        date: '2020-06-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  changeTaskStatus = id => {

    let tasks = [...this.state.tasks] // copy object
    tasks = this.state.tasks.map(task => { // map return new array
      if (id === task.id) { // checks by id
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    })

    this.setState({
      tasks,
    })
  }

  deleteTask = id => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id); 
    // tasks.splice(index, 1);

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks,
    })
  }

  addTask = (name, important, date) => {
    const task = {
      id: this.counter,
      name,
      date,
      important,
      active: true,
      finishDate: null,
    }

    const tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({
      tasks,
    })

    this.counter++;

    return true;
  }

  render() {
    return (
      <div className="app">
        <AddTask tasks={this.state.tasks} add={this.addTask} />
        <TaskList tasks={this.state.tasks} changeTaskStatus={this.changeTaskStatus} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;