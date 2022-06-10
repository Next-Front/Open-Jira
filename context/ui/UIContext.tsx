import { createContext } from "react";

export interface UIContext {
  sideOpen: boolean;
  isAddingEntry: boolean;
  toggleSidebar: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
}

export const UIContext = createContext({} as UIContext);
