import { createContext } from "react";

export interface UIContext {
  sideOpen: boolean;
  toggleSidebar: () => void;
}

export const UIContext = createContext({} as UIContext);
