import { createContext } from "react";

export interface UIContext {
  sideOpen        : boolean;
  isAddingEntry   : boolean;
  isDragging      : boolean;
  
  toggleSidebar   : () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  setIsDragging   : (isDragging: boolean) => void;
}

export const UIContext = createContext({} as UIContext);
