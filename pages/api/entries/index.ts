import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry as IEntry } from '../../../interfaces/entry'
import { Entry } from '../../../models'

type Data = {
  message?: string
  entries?: IEntry[]
  error?: string
}

export default function handler (
  req: NextApiRequest, 
  res: NextApiResponse<Data>
) {

  switch (req.method) {
    case 'GET':
      return getEntries(res)
    case 'POST':
      return createEntry(req, res)
    default:
      return res.status(400).json({ message: 'Method not allowed' })
  }
}

const getEntries = async ( res: NextApiResponse<Data> ) => {
  try {

    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' })
    return res.status(200).json({ message: 'OK', entries })

  } catch (error: any) {
    return res.status(500).json({ message: 'Error', error: error.message })
  } finally {
    await db.disconnect();
  }
}

const createEntry = async  (
  req: NextApiRequest, 
  res: NextApiResponse<Data>
) => {
  try {
    
  } catch (error) {
    
  }
}