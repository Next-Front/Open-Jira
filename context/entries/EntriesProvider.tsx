import React, { useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";

export interface EntriesState {
}

const ENTRIES_STATE_INITIAL: EntriesState = {
}

export const EntriesProvider = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_STATE_INITIAL)

  return (
    <EntriesContext.Provider 
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
