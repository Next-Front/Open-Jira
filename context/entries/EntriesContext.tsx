import { createContext } from "react";
import { Entry, EntryStatus } from "../../interfaces/entry";

export interface EntriesContext {
  entries: Entry[];
  activeToDelete: string;

  addEntry: (entryDescription: string) => void;
  updateEntryStatus: (id: string, status: EntryStatus ) => void;
  deleteEntry: ( id ?: string ) => Promise<void>;
  setActiveToDelete: (id: string) => void;
  getEntries: () => Promise<void>;
  updateEntry: ( id: string, body: Entry ) => Promise<void>
}

export const EntriesContext = createContext({} as EntriesContext);
