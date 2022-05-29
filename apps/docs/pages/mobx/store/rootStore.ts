import { types } from "mobx-state-tree";
import Todo from "../models/todos";
import { values } from "mobx";

const initData = {
  todos: [],
};

export type RootStoreModel = typeof RootStore;
const RootStore = types
  .model("rootStore", {
    todos: types.array(Todo),
  })
  .views((self) => ({
    get getTodo() {
      return self.todos;
    },
    get getTodoLength() {
      return values(self.todos).length;
    },
    get completedCount() {
      return values(self.todos).filter((item) => item.done).length;
    },
    get pendingCount() {
      return values(self.todos).filter((item) => !item.done).length;
    },
  }))
  .actions((self) => ({
    addTodo(name: string, done: boolean) {
      self.todos.push(Todo.create({ name, done }));
    },
  }))
  .create(initData);

export default RootStore;
