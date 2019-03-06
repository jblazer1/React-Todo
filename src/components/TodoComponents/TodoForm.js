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
    </form>
  );
};

export default TodoForm;
