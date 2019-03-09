import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newTodo: "",
      completed: false
    };
  }

  newTodoHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    if (this.state.newTodo === "") {
      alert("You have to enter a new Todo in order to add a Todo you igit!");
    } else {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.newTodo,
            id: Date.now(),
            completed: false
          }
        ],
        newTodo: ""
      });
    }
  };

  markComplete = itemId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(banana => {
          if (banana.id === itemId) {
            return {
              task: banana.task,
              id: banana.id,
              completed: !banana.completed
            };
          } else {
            return banana;
          }
        })
      };
    });
  };

  removeComplete = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(allDone => {
          return !allDone.completed;
        })
      };
    });
  };

  // formSubmitHandler = event => {
  //   event.preventDefault();
  //   let newTodo = {
  //     task: this.state.task,
  //     id: Date.now(),
  //     completed: false
  //   };
  //   this.setState(prevState => {
  //     return {
  //       todos: [...prevState.todos, newTodo],
  //       task: "",
  //       id: "",
  //       completed: ""
  //     };
  //   });
  // };

  render() {
    return (
      <div className="app-container">
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
        <TodoForm
          addTodo={this.addTodo}
          newTodoHandler={this.newTodoHandler}
          newTodo={this.state.newTodo}
          removeComplete={this.removeComplete}
        />
      </div>
    );
  }
}

export default App;
