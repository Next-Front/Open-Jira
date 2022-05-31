import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Home Page'>
      <Grid container spacing={2}> 

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />
            <CardContent>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Progress' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done' />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default Home
