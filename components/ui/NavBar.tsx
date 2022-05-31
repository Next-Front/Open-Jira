import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

const NavBar = () => {

  const { toggleSidebar } = useContext(UIContext)

  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6" >OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar