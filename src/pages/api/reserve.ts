import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const client = new MongoClient(uri)

let cachedDb: Db | null = null

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb
  }

  await client.connect()
  const db = client.db('MONGODB_URI')
  cachedDb = db
  return db
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase()
      const reservations = db.collection('reservations')

      const { date } = req.body
      await reservations.insertOne({ date: new Date(date) })

      res.status(200).json({ message: 'Reserva realizada con éxito' })
    } catch (error) {
      console.error('Error al realizar la reserva:', error)
      res.status(500).json({ error: 'Error al realizar la reserva' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}