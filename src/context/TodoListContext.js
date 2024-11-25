import React, { createContext, useReducer } from 'react';
import { initialState, todoListReducer } from "./todoListReducer";

export const TodoListContext = createContext();

export const TodoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  return (
      <TodoListContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoListContext.Provider>
  );
}