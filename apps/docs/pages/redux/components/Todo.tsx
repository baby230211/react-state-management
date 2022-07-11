import React from "react";
import { useAppDispatch } from "../hooks";
import { toggleDone, setTitle } from "../slices/todoSlice";
interface ITodo {
  todo: {
    done: boolean;
    name: string;
    id: number;
  };
}

const Todo = (props: ITodo) => {
  const { done, name, id } = props.todo;
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          dispatch(toggleDone(props.todo));
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          dispatch(setTitle({ name: e.target.value, id }));
        }}
      />
    </div>
  );
};

export default Todo;
