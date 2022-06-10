import { List, Paper } from '@mui/material'
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { EntryStatus } from '../../interfaces/entry'
import EntryCard from './EntryCard'

interface Props {
  status: EntryStatus
}

const EntryList: FC<Props> = ({ status }) => {

  const { entries }  = useContext(EntriesContext)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status), 
  [entries, status])

  return (
    <div>
      <Paper 
        sx={{ 
          height: 'calc(100vh - 200px)', 
          overflow: 'auto', 
          backgroundColor: 'transparent', 
          overflowX: 'hidden', 
          padding: 1 
        }}
      >
        <List sx={{ opacity: 1, transition: '' }}>  
          {
            entriesByStatus.map((entry, index) => (
              <EntryCard key={index} entry={entry} />
            ))
          }
        </List>
      </Paper>  
    </div>
  )
}

export default EntryList