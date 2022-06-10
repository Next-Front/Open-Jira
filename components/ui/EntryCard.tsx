import { FC } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';

interface Props {
  entry: Entry
}

const EntryCard: FC<Props> = ({ entry: { description, _id, createdAt } }) => {

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', _id);
  }

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  }

  return (
    <Card
      draggable
      sx={{ marginBottom: 1 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >{ description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant='body2' >hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard