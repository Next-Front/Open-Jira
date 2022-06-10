import React, { useReducer } from "react";
import { Entry } from "../../interfaces/entry";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { uuid } from 'uuidv4';
export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_STATE_INITIAL: EntriesState = {
  entries: []
}

export const EntriesProvider = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_STATE_INITIAL)

  const addEntry = (entryDescription: string) => {
    dispatch({
      type: 'ADD',
      payload: {
        _id: uuid(),
        description: entryDescription,
        status: 'pending',
        createdAt: Date.now()
      }
    })
  }

  return (
    <EntriesContext.Provider 
      value={{
        ...state,
        addEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
