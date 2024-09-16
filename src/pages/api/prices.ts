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
  const db = client.db('funny_games')
  cachedDb = db
  return db
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase()
  const prices = db.collection('prices')

  if (req.method === 'GET') {
    try {
      const planPrices = await prices.find({ type: 'plan' }).toArray()
      const hourlyPrices = await prices.find({ type: 'hourly' }).toArray()
      res.status(200).json({ plans: planPrices, hourly: hourlyPrices })
    } catch (error) {
      console.error('Error fetching prices:', error)
      res.status(500).json({ error: 'Error fetching prices' })
    }
  } else if (req.method === 'POST') {
    try {
      const newPrice = req.body
      await prices.insertOne(newPrice)
      res.status(201).json({ message: 'Price added successfully' })
    } catch (error) {
      console.error('Error adding price:', error)
      res.status(500).json({ error: 'Error adding price' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { id, ...updateData } = req.body
      await prices.updateOne({ _id: id }, { $set: updateData })
      res.status(200).json({ message: 'Price updated successfully' })
    } catch (error) {
      console.error('Error updating price:', error)
      res.status(500).json({ error: 'Error updating price' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}