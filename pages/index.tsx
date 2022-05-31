import type { NextPage } from 'next'
import { Card, CardHeader, Grid } from '@mui/material'
import Layout from '../components/layouts/Layout';
import EntryList from '../components/ui/EntryList';

const Home: NextPage = () => {
  return (
    <Layout title='Home Page'>
      <Grid container spacing={2}> 

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)', padding: '0px 15px' }}>
            <CardHeader title='Pending' />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)', padding: '0px 15px' }}>
            <CardHeader title='Progress' />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)', padding: '0px 15px' }}>
            <CardHeader title='Done' />
            <EntryList />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default Home
