import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { seedData } from '../../database/seed-data'
import { Entry } from '../../models'

type Data = {
  message?: string,
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    
    if( process.env.NODE_ENV === 'production' ){
      res.status(404).json({ message: 'No tiene acceso' })
    }
    
    await db.connect();
    await Entry.deleteMany();
    await Entry.insertMany(seedData.entries)
    await db.disconnect();
  
    res.status(200).json({ message: 'OK' })

  } catch (error: any) {
    res.status(500).json({ error: error.message })
  } 
}
