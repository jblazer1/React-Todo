import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      newTodo: ""
    };
  }

  newTodoHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          newTodo={this.state.newTodo}
          newTodoHandler={this.newTodoHandler}
        />
      </div>
    );
  }
}

export default App;
