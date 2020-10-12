import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer();
  return <StateContext.Provider>{children}</StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
export const useStateDisptach = () => useContext(StateDispatchContext);
