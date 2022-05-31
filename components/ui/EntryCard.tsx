import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

const EntryCard = () => {
  return (
    <Card
      sx={{ marginBottom: 1 }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >esto es descripcion</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant='body2' >hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard