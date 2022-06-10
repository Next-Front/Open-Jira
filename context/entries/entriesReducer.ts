import { Entry } from "../../interfaces/entry";
import { EntriesState } from "./EntriesProvider";

type UIType = 
  | { type: 'ADD', payload: Entry }


export const entriesReducer = ( state: EntriesState, action: UIType ): EntriesState => {

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      }
    default:
      return state;
  }
  
}