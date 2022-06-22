import { FC, useContext, useState } from 'react';
import { GetServerSideProps } from 'next'
import { Delete, Save } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import Layout from '../../components/layouts/Layout';
import { Entry, EntryStatus } from '../../interfaces/entry';
import { getEntryById } from '../../database/dbEntries';
import { formatDate } from '../../utils/formatDate';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { useRouter } from 'next/router';

interface Props {
  entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {

  const router = useRouter()
  const { deleteEntry, getEntries, updateEntry } = useContext(EntriesContext)
  const [inputValue, setInputValue] = useState(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)

  const onSave = async () => {
    const data = {
      ...entry,
      status,
      description: inputValue
    }
    await updateEntry( entry._id, data )
  }

  const onDeleteEntry = async () => {
    await deleteEntry(entry._id);
    router.push('/')
  }

  return (
    <Layout title={inputValue}>
      <Grid
        container
        justifyContent={'center'}
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader 
              title={`Entry: ${inputValue.substring(0, 10).concat('...')}`}
              subheader={`Created ago: ${formatDate(new Date(entry.createdAt))}`}
            />
            <CardContent>
              <TextField
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value) }
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Enter your entry here'
                autoFocus
                multiline
                label='Entry'
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup 
                  row
                  value={status}
                  onChange={ (e) => setStatus(e.target.value as EntryStatus) }
                >
                  <FormControlLabel value='pending'     control={<Radio />} label='Pending' />
                  <FormControlLabel value='in-progress' control={<Radio />} label='In Progress' />
                  <FormControlLabel value='done'        control={<Radio />} label='Done' />
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Grid item xs={12} p='10px'>
                <Button
                  disabled={ !inputValue || !status }
                  variant='outlined'
                  color='primary'
                  startIcon={<Save />}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  onClick={onSave}
                >
                  Save
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={onDeleteEntry}
                  startIcon={<Delete />}
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
            </CardActions>

          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  const { id } = params as { id: string }

  
  const entry = await getEntryById(id)
  
  if( !entry ){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      entry    
    }
  }
}

export default EntryPage