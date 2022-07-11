import React from "react";
import { useAppSelector } from "../hooks";
import Todo from "./Todo";

const TodoList = (props) => {
  const todos = useAppSelector((state) => state.todos.data);
  return (
    <>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
