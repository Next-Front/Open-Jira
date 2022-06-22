import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";
import LinkNext from "next/link";

const NavBar = () => {

  const { toggleSidebar } = useContext(UIContext)

  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
        <LinkNext href='/' passHref>
          <Link underline="none">
            <Typography variant="h6" >OpenJira</Typography>
          </Link>
        </LinkNext>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar