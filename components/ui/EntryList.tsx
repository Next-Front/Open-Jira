import { List, Paper } from '@mui/material'
import EntryCard from './EntryCard'

const EntryList = () => {
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
          <EntryCard />
        </List>
      </Paper>  
    </div>
  )
}

export default EntryList