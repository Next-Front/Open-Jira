import { createContext } from "react";
import { Entry } from "../../interfaces/entry";

export interface EntriesContext {
  entries: Entry[];
  addEntry: (entryDescription: string) => void;
}

export const EntriesContext = createContext({} as EntriesContext);
