import { FC, useContext, useEffect, useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Entry, EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
import ContextMenu from './ContextMenu';
import { formatDate } from '../../utils/formatDate';
import { useRouter } from 'next/router';

interface Props {
  entry: Entry
}

const EntryCard: FC<Props> = ({ entry: { description, _id, createdAt, status } }) => {

  const router = useRouter()
  const [valueSelect, setValueSelect] = useState(status)
  const { updateEntryStatus, setActiveToDelete}  = useContext(EntriesContext)

  const { 
    setIsDragging, 
    setIsOpenContextMenu, 
    setPointsContextMenu,  
    isOpenContextMenu, 
    pointsContextMenu 
  }  = useContext(UIContext)

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', _id);
    setIsDragging(true)
  }

  const onSelectChange = (event: SelectChangeEvent<"pending" | "in-progress" | "done">) => {
    setValueSelect(event.target.value as EntryStatus)
    updateEntryStatus(_id, event.target.value as EntryStatus)
  }

  const handleContextMenu = (event: any) => {
    event.preventDefault();
    setActiveToDelete(_id)
    setPointsContextMenu({ x: event.pageX, y: event.pageY });
    setIsOpenContextMenu(true);
  }

  useEffect(() => {
    const handleClick = () => setIsOpenContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <Card
      draggable
      sx={{ 
        marginBottom: 1,
        opacity: 1,
      }}
      onClick={() => router.push(`/entries/${_id}`)}
      onDragStart={onDragStart}
      onContextMenu={handleContextMenu}
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
          <Typography variant='body2' >{formatDate(new Date(createdAt))}</Typography>
        </CardActions>
      </CardActionArea>

      <ContextMenu 
        isOpenContextMenu={isOpenContextMenu}  
        pointsContextMenu={pointsContextMenu}
      />
    </Card>
  )
}

export default EntryCard