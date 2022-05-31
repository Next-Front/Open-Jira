import { EntriesState } from "./EntriesProvider";

type UIType = | { type: 'ADD'}

export const entriesReducer = ( state: EntriesState, action: UIType ): EntriesState => {

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
      }
    default:
      return state;
  }
  
}