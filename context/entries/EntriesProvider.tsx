import React, { useEffect, useReducer } from "react";
import { EntriesResponse, Entry, EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { entriesApi } from "../../apis";
export interface EntriesState {
  entries: Entry[],
  activeToDelete: string,
}

const ENTRIES_STATE_INITIAL: EntriesState = {
  entries: [],
  activeToDelete: '',
}

export const EntriesProvider = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_STATE_INITIAL)

  const addEntry = async (entryDescription: string) => {
    try {
      const resp = await entriesApi.post<EntriesResponse>('/entries',{
        description: entryDescription,
        status: 'pending',
        createdAt: Date.now()
      })

      const { entry } = resp.data
      dispatch({
        type: 'ADD',
        payload: entry!
      })
    } catch (error) {
      console.log(error)
    } 
  }

  const updateEntryStatus = async ( id: string, state: EntryStatus ) => {
    try {
      const resp = await entriesApi.put<EntriesResponse>(`/entries/${id}`, {
        status: state
      })
      const { entry } = resp.data
      
      if(!entry) return

      dispatch({
        type: 'UPDATE_ENTRY_STATUS',
        payload: {
          id: entry._id,
          status: entry.status
        }
      })
    } catch (error) {
      
    }
  }

  const getEntries = async () => {
    try {
      const resp = await entriesApi.get<EntriesResponse>('/entries')
      const { entries, message } = resp.data
      dispatch({
        type: 'INITIAL_LOAD',
        payload: entries!
      })
    } catch (error) {
      console.log(error)
    } 
  }

  const setActiveToDelete = (id: string) => {
    dispatch({
      type: 'SET_ACTIVE_TO_DELETE',
      payload: id
    })
  }

  const deleteEntry = async () => {
    try {
      await entriesApi.delete(`/entries/${state.activeToDelete}`)
      dispatch({
        type: 'DELETE_ENTRY',
        payload: state.activeToDelete
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
        updateEntryStatus,
        deleteEntry,
        setActiveToDelete
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
