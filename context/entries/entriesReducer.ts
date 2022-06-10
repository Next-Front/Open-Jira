import { Entry, EntryStatus } from "../../interfaces/entry";
import { EntriesState } from "./EntriesProvider";

type UIType = 
  | { type: 'ADD', payload: Entry }
  | { type: 'UPDATE_ENTRY_STATUS', payload: { id: string, status: EntryStatus } }


export const entriesReducer = ( state: EntriesState, action: UIType ): EntriesState => {

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      }
    case 'UPDATE_ENTRY_STATUS':
      const { id, status } = action.payload;
      const entry = state.entries.find(entry => entry._id === id);
      if (entry) {
        entry.status = status;
      }
      return {
        ...state,
        entries: [...state.entries],
      }
    default:
      return state;
  }
  
}