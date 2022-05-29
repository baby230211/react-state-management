import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../hooks/useStore";
import { TodoModel } from "../models/todos";

interface ITodo {
  todo: TodoModel;
}

export const Todo = observer((props: ITodo) => {
  const { todo } = props;
  const { name, done } = todo;
  // const { store } = useStore();
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          todo.toggleDone();
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => todo.setTitle(e.target.value)}
      />
    </div>
  );
});
