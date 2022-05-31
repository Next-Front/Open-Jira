import { UIState } from "./UIProvider";

type UIType = | { type: 'CHANGE_SIDEBAR'}

export const uiReducer = ( state: UIState, action: UIType ): UIState => {
  switch (action.type) {
    case 'CHANGE_SIDEBAR':
      return {
        ...state,
        sideOpen: !state.sideOpen
      }
    default:
      return state;
  }
}