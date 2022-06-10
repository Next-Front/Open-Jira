import React, { useReducer } from "react";
import { Entry } from "../../interfaces/entry";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_STATE_INITIAL: EntriesState = {
  entries: [
    {
      _id: "1",
      createdAt: Date.now(),
      description: "pending: some description",
      status: "pending",
    },
    {
      _id: "2",
      createdAt: Date.now() - 1000,
      description: "in-progress: some description 2",
      status: "in-progress",
    },
    {
      _id: "3",
      createdAt: Date.now() - 100,
      description: "done: some description for many entries",
      status: "done",
    }
  ]
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
