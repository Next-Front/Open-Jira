import { useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

const NewEntry = () => {

  const [textTask, setTextTask] = useState('')
  const { addEntry } = useContext(EntriesContext)
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext)

  const handleAdd = () => {
    addEntry( textTask )
    setIsAddingEntry(false)
    setTextTask('')
  }
  
  return (
    <Box pb='10px'>
      {
        isAddingEntry ? (
          <>
            <TextField 
              fullWidth
              sx={{ marginTop: 2, mb: 1 }}
              placeholder='New Entry'
              autoFocus
              multiline
              label='New Entry'
              value={textTask}
              onChange={(e) => setTextTask(e.target.value)}
            />
            <Box display='flex' justifyContent='space-between'>
              <Button
                variant='text'
                onClick={() => setIsAddingEntry(false)}
              >
                Cancelar
              </Button>
              <Button
                variant='outlined'
                color='primary'
                endIcon={<SaveIcon />}
                disabled={!textTask}
                onClick={handleAdd}
              >
                Save
              </Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<AddIcon />}
            fullWidth
            variant='outlined'
            onClick={() => setIsAddingEntry(!isAddingEntry)}
          >
            Add task
          </Button>
        )
      }
    </Box>
  )
}

export default NewEntry