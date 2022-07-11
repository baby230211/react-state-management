import { Button } from "ui";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import TodoList from "./components/TodoList";

import { addTodo } from "./slices/todoSlice";
function ReactRedux() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>react redux</h1>
      <Button
        onClick={() => {
          console.log("hello");
          dispatch(
            addTodo({
              name: "i am ",
              done: false,
              id: Math.round(Math.random() * 1000),
            })
          );
        }}
      />
      <TodoList />
    </div>
  );
}
export default function Docs() {
  return (
    <Provider store={store}>
      <ReactRedux />
    </Provider>
  );
}
