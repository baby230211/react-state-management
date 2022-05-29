import React, { ReactElement, ReactNode, ReactPropTypes } from "react";
import { Button } from "ui";
import { TodoList } from "./components/TodoList";
import { StoreProvider, useStore } from "./hooks/useStore";
import RootStore from "./store/rootStore";

function Mobx() {
  const store = useStore();
  return (
    <div>
      <h1>mobx</h1>
      <Button onClick={() => store.addTodo("i am ", false)} />
      <TodoList />
    </div>
  );
}

export default function Root() {
  return (
    <StoreProvider value={RootStore}>
      <Mobx />
    </StoreProvider>
  );
}
