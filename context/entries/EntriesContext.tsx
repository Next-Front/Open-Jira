import { createContext } from "react";
import { Entry } from "../../interfaces/entry";

export interface EntriesContext {
  entries: Entry[];
}

export const EntriesContext = createContext({} as EntriesContext);
