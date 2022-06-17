import { FC, useContext } from "react";
import { List, ListItem } from "@mui/material";
import { EntriesContext } from "../../context/entries/EntriesContext";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';

interface IProps {
  isOpenContextMenu: boolean;
  pointsContextMenu: { x: number; y: number };
}

const ContextMenu:FC<IProps> = ({ isOpenContextMenu, pointsContextMenu }) => {

  const { deleteEntry }  = useContext(EntriesContext)

  if(!isOpenContextMenu) return null;

  return (
    <>
      <List
        className="menuContext"
        sx={{
          top : pointsContextMenu.y + 10,
          left: pointsContextMenu.x - 10,
          fontSize: '14px',
          maxWidth: '150px',
          padding: '0px',
        }}
      >
        <ListItem className="menuItem">
          <EditSharpIcon className="mr-1" /> Edit
        </ListItem>
        <ListItem className="menuItem" onClick={deleteEntry}>
          <ClearSharpIcon className="mr-1" color="error" /> Delete
        </ListItem>
      </List>
    </>
  )
}

export default ContextMenu