import { FC } from "react"
import { Box } from "@mui/material"
import Head from "next/head"
import NavBar from "../ui/NavBar";
import Sidebar from "../ui/Drawer";

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

const Layout: FC<IProps> = ({ title = 'OpenJira app', children }) => {
  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      <Head>
        <title>{ title }</title>
      </Head>
      <NavBar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }} >
        { children }
      </Box>
    </Box>
  )
}

export default Layout