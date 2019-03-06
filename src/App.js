import React from "react";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
