import { createContext } from "react";

export interface UIContext {
  sideOpen        : boolean;
  isAddingEntry   : boolean;
  isDragging      : boolean;
  isOpenContextMenu: boolean;
  pointsContextMenu: { x: number, y: number };

  toggleSidebar   : () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  setIsDragging   : (isDragging: boolean) => void;
  setIsOpenContextMenu: (isOpenContextMenu: boolean) => void;
  setPointsContextMenu: (pointsContextMenu: { x: number, y: number }) => void;
}

export const UIContext = createContext({} as UIContext);
