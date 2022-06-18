import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Entry as IEntry } from '../../../../interfaces/entry'
import { Entry } from '../../../../models'
import mongoose from 'mongoose';

type Data = {
  message?: string
  entry?: IEntry | null
  error?: string
}

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<Data>) 
{
  
  if( !mongoose.isValidObjectId(req.query.id) ) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res)
    case 'PUT':
      return updateEntry(req, res)
    case 'DELETE':
      return deleteEntry(req, res)
    default:
      return res.status(400).json({ message: 'Method not allowed' })
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {

    await db.connect();
    const entry = await Entry.findById(req.query.id)
    return res.status(200).json({ message: 'OK', entry })

  } catch (error: any) {
    return res.status(500).json({ message: 'Error', error: error.message })
  } finally {
    await db.disconnect();
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {

    const { id } = req.query

    await db.connect();
    const entry = await Entry.findById(id)
    if(!entry) {
      return res.status(404).json({ message: 'Entry not found' })
    }

    const updatedEntry = await Entry.findByIdAndUpdate( id, req.body, { 
      new: true,
      runValidators: true,
    })
    return res.status(200).json({ message: 'OK', entry: updatedEntry })
    
  } catch (error: any) {
    return res.status(500).json({ message: 'Error', error: error.message })
  } finally {
    await db.disconnect();
  }
}

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {

    await db.connect();
    const entry = await Entry.findByIdAndDelete(req.query.id)
    return res.status(200).json({ message: 'OK', entry })

  } catch (error: any) {
    return res.status(500).json({ message: 'Error', error: error.message })
  } finally {
    await db.disconnect();
  }
}