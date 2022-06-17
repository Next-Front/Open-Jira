import { UIState } from "./UIProvider";

type UIType = 
  | { type: 'CHANGE_SIDEBAR'}
  | { type: 'IS_ADDING_ENTRY', payload: boolean }
  | { type: 'IS_DRAGGING'    , payload: boolean }
  | { type: 'IS_OPEN_MENU_CONTEXTS', payload: boolean }
  | { type: 'SET_POINTS_MENU_CONTEXTS', payload: { x: number, y: number } }


export const uiReducer = ( state: UIState, action: UIType ): UIState => {
  switch (action.type) {
    case 'CHANGE_SIDEBAR':
      return {
        ...state,
        sideOpen: !state.sideOpen
      }
    case 'IS_ADDING_ENTRY':
      return {
        ...state,
        isAddingEntry: action.payload
      }
    case 'IS_DRAGGING':
      return {
        ...state,
        isDragging: action.payload
      }
    case 'IS_OPEN_MENU_CONTEXTS':
      return {
        ...state,
        isOpenContextMenu: action.payload
      }
    case 'SET_POINTS_MENU_CONTEXTS':
      return {
        ...state,
        pointsContextMenu: action.payload
      }
  
    default:
      return state;
  }
}