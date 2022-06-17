import React, { useEffect, useReducer } from "react";
import { EntriesResponse, Entry, EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { uuid } from 'uuidv4';
import { entriesApi } from "../../apis";
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

  const updateEntryStatus = ( id: string, state: EntryStatus ) => {
    dispatch({
      type: 'UPDATE_ENTRY_STATUS',
      payload: {
        id,
        status: state
      }
    })
  }

  const getEntries = async () => {
    try {
      const resp = await entriesApi.get<EntriesResponse>('/entries')
      const { entries, message } = resp.data
      dispatch({
        type: 'INITIAL_LOAD',
        payload: entries
      })
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <EntriesContext.Provider 
      value={{
        ...state,
        addEntry,
        updateEntryStatus
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
