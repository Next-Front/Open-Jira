import { Entry, EntryStatus } from "../../interfaces/entry";
import { EntriesState } from "./EntriesProvider";

type UIType = 
  | { type: 'ADD', payload: Entry }
  | { type: 'UPDATE_ENTRY_STATUS', payload: { id: string, status: EntryStatus } }
  | { type: 'INITIAL_LOAD', payload: Entry[] }
  | { type: 'DELETE_ENTRY', payload: string }
  | { type: 'SET_ACTIVE_TO_DELETE', payload: string }


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
    case 'INITIAL_LOAD':
      return {
        ...state,
        entries: action.payload,
      }
    case 'SET_ACTIVE_TO_DELETE': 
      return {
        ...state,
        activeToDelete: action.payload,
      }
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: state.entries.filter(entry => entry._id !== action.payload),
      }
    default:
      return state;
  }
  
}