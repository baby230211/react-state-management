import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
  name: string;
  done: boolean
  id: number;
}
interface TodosState {
  data: TodoState[]
}

const initialState: TodosState = {
  data: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleDone: (state, action: PayloadAction<{ name: string, done: boolean, id: number }>) => {
      state.data.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = !todo.done
        }
      })
    },
    setTitle: (state, action: PayloadAction<{ name: string, id: number }>) => {
      state.data.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name
        }
      })
    },
    addTodo: (state, action: PayloadAction<{ name: string, done: boolean, id: number }>) => {
      console.log('action: ', action);
      state.data.push(action.payload)
    }
  }
})

export const { addTodo, toggleDone, setTitle } = todoSlice.actions;

export default todoSlice.reducer