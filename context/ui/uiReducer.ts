import { UIState } from "./UIProvider";

type UIType = 
  | { type: 'CHANGE_SIDEBAR'}
  | { type: 'IS_ADDING_ENTRY', payload: boolean }

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
    default:
      return state;
  }
}