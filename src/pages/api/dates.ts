/* import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'
import { addDays } from 'date-fns'

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
  const db = client.db('funny_games')
  cachedDb = db
  return db
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase()
      const reservations = db.collection('reservations')

      // Obtener todas las fechas reservadas
      const reservedDates = await reservations.find({}).toArray()

      // Generar fechas disponibles (próximos 30 días menos las fechas reservadas)
      const today = new Date()
      const availableDates = Array.from({ length: 30 }, (_, i) => addDays(today, i))
        .filter(date => !reservedDates.some(reserved => 
          reserved.date.getTime() === date.getTime()
        ))

      res.status(200).json({ 
        availableDates: availableDates.map(d => d.toISOString()), 
        reservedDates: reservedDates.map(r => r.date.toISOString()) 
      })
    } catch (error) {
      console.error('Error al obtener las fechas:', error)
      res.status(500).json({ error: 'Error al obtener las fechas' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} */