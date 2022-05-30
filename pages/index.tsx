import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Layout 
        title='OpenJira app'
      >
        <Typography variant='h1'>
          OpenJira app
        </Typography>
      </Layout>
    </div>
  )
}

export default Home
