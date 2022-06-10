import { FC } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';

interface Props {
  entry: Entry
}

const EntryCard: FC<Props> = ({ entry: { description, _id, createdAt } }) => {
  return (
    <Card
      sx={{ marginBottom: 1 }}
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