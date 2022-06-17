import React, { useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIState {
  sideOpen     : boolean;
  isAddingEntry: boolean;
  isDragging  : boolean;
  isOpenContextMenu: boolean;
  pointsContextMenu  : { x: number, y: number };
}

const UI_STATE_INITIAL: UIState = {
  sideOpen     : false,
  isAddingEntry: false,
  isDragging   : false,
  isOpenContextMenu: false,
  pointsContextMenu  : { x: 0, y: 0 },
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

  const setIsDragging = (isDragging: boolean) => {
    dispatch({ 
      type: 'IS_DRAGGING', 
      payload: isDragging 
    })
  }

  const setIsOpenContextMenu = (isOpenContextMenu: boolean) => {
    dispatch({ 
      type: 'IS_OPEN_MENU_CONTEXTS', 
      payload: isOpenContextMenu 
    })
  }

  const setPointsContextMenu = (pointsContextMenu: { x: number, y: number }) => {
    dispatch({ 
      type: 'SET_POINTS_MENU_CONTEXTS', 
      payload: pointsContextMenu 
    })
  }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        toggleSidebar,
        setIsAddingEntry,
        setIsDragging,
        setIsOpenContextMenu,
        setPointsContextMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
