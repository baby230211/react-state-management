import { SnapshotOut, types, Instance } from "mobx-state-tree";

export type TodoModel = Instance<typeof Todo>;
const Todo = types
  .model("TodoMode", {
    name: types.string,
    done: types.boolean,
  })
  .actions((self) => ({
    toggleDone() {
      self.done = !self.done;
    },
    setTitle(name: string) {
      self.name = name;
    },
  }));

export interface ITodo extends SnapshotOut<typeof Todo> {}
export default Todo;
