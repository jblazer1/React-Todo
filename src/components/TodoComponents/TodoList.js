import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <Todo todo={todo} key={todo.id} markComplete={props.markComplete} />
        );
      })}
    </div>
  );
};

export default TodoList;
