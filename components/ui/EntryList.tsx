import { List, Paper } from '@mui/material'
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
import { EntryStatus } from '../../interfaces/entry'
import EntryCard from './EntryCard'
import styles from '../../styles/entry.module.css'

interface Props {
  status: EntryStatus
}

const EntryList: FC<Props> = ({ status }) => {

  const { entries, updateEntryStatus }  = useContext(EntriesContext)
  const { isDragging, setIsDragging, isOpenContextMenu, pointsContextMenu }  = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status), 
  [entries, status])

  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    updateEntryStatus(id, status)
    setIsDragging(false)
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={(event) => event.preventDefault()}
      className={`${isDragging ? styles.containerEntry : ''}`}
    >
      <Paper 
        sx={{ 
          height: status === 'pending'? 'calc(100vh - 230px)' : 'calc(100vh - 180px)', 
          overflow: 'auto', 
          backgroundColor: 'transparent', 
          overflowX: 'hidden', 
          padding: 1 
        }}
      >
        <List 
          sx={{ 
            opacity: isDragging ? 0.2 : 1,
            transition: 'all 0.2s ease-in-out',
          }}
        >  
          {
            entriesByStatus.map((entry, index) => (
              <EntryCard key={index} entry={entry} />
            ))
          }
        </List>
      </Paper>  

      {/* {isOpenContextMenu && (
        <ul
          className="menuContext"
          style={{
            top : pointsContextMenu.y,
            left: pointsContextMenu.x,
          }}
        >
          <li>Delete</li>
        </ul>
      )} */}
    </div>
  )
}

export default EntryList