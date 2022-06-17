import { FC, useContext, useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Entry, EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

interface Props {
  entry: Entry
}

const EntryCard: FC<Props> = ({ entry: { description, _id, createdAt, status } }) => {

  const [activeDrag, setActiveDrag] = useState(false)
  const [valueSelect, setValueSelect] = useState(status)
  const { updateEntryStatus }  = useContext(EntriesContext)
  const { setIsDragging }  = useContext(UIContext)

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', _id);
    setActiveDrag(true)
    setIsDragging(true)
  }

  const onSelectChange = (event: SelectChangeEvent<"pending" | "in-progress" | "done">) => {
    setValueSelect(event.target.value as EntryStatus)
    updateEntryStatus(_id, event.target.value as EntryStatus)
  }

  return (
    <Card
      draggable
      sx={{ 
        marginBottom: 1,
        opacity: 1,
      }}
      onDragStart={onDragStart}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >{ description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Select
            value={status || valueSelect}
            onChange={onSelectChange}
            sx={{ width: 'auto', height: "30px", fontSize: '13px' }}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
          <Typography variant='body2' >hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard