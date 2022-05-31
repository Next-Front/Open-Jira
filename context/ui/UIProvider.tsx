import React, { useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./UIReducer";

export interface UIState {
  sideOpen: boolean;
}

const UI_STATE_INITIAL: UIState = {
  sideOpen: false,
}

export const UIProvider = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_STATE_INITIAL)

  const toggleSidebar = () => {
    dispatch({ type: 'CHANGE_SIDEBAR' })
  }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        toggleSidebar
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
