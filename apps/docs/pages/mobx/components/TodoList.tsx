import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../hooks/useStore";
import { Todo } from "./Todo";

export const TodoList = observer(() => {
  const store = useStore();
  const { todos } = store;
  console.log("store: ", todos);
  return (
    <ul>
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.name} />
      ))}
    </ul>
  );
});
