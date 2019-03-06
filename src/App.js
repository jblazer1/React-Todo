import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

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
      todos: todos
    };
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
