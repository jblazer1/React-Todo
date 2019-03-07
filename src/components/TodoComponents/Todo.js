import React from "react";

const Todo = props => {
  return (
    <p
      className="todo"
      key={props.todo.id}
      onClick={event => {
        props.markComplete(props.todo.id);
      }}
    >
      {props.todo.task}
    </p>
  );
};

export default Todo;
