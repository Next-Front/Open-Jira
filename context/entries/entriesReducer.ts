import { EntriesState } from "./EntriesProvider";

type UIType = | { type: 'CHANGE_SIDEBAR'}

export const entriesReducer = ( state: EntriesState, action: UIType ): EntriesState => {
  switch (action.type) {
    case 'CHANGE_SIDEBAR':
      return {
        ...state,
      }
    default:
      return state;
  }
}