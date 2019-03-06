import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo />;
      })}
    </div>
  );
};

export default TodoList;
