import React from "react";

const Todo = props => {
  let todoCompleted = props.todo.completed ? " todoCompleted" : "";
  return (
    <p
      className={`todo ${todoCompleted}`}
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
