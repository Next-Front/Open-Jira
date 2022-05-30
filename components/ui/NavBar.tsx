import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const NavBar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6" >OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar