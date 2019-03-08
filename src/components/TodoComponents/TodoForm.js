import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        value={props.newTodo}
        type="text"
        onChange={props.newTodoHandler}
        name="newTodo"
      />
      <button type="submit" onClick={props.addTodo}>
        Add Todo
      </button>
      <button onClick={props.removeComplete}>Remove Completed Todos</button>
    </form>
  );
};

export default TodoForm;
