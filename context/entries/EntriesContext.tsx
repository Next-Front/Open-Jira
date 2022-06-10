import { createContext } from "react";
import { Entry, EntryStatus } from "../../interfaces/entry";

export interface EntriesContext {
  entries: Entry[];
  addEntry: (entryDescription: string) => void;
  updateEntryStatus: (id: string, status: EntryStatus ) => void;
}

export const EntriesContext = createContext({} as EntriesContext);
