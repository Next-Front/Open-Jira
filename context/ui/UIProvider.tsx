import React, { useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIState {
  sideOpen     : boolean;
  isAddingEntry: boolean;
}

const UI_STATE_INITIAL: UIState = {
  sideOpen     : false,
  isAddingEntry: false,
}

export const UIProvider = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_STATE_INITIAL)

  const toggleSidebar = () => {
    dispatch({ type: 'CHANGE_SIDEBAR' })
  }

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ 
      type: 'IS_ADDING_ENTRY', 
      payload: isAddingEntry 
    })
  }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        toggleSidebar,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
