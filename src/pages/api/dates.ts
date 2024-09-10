import type { NextApiRequest, NextApiResponse } from 'next'
import { addDays } from 'date-fns'

// This would be replaced with your actual database logic
const reservedDates: Date[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Generate available dates (next 30 days minus reserved dates)
    const today = new Date()
    const availableDates = Array.from({ length: 30 }, (_, i) => addDays(today, i))
      .filter(date => !reservedDates.some(reserved => reserved.getTime() === date.getTime()))

    res.status(200).json({ availableDates, reservedDates })
  } else if (req.method === 'POST') {
    // Add a new reservation
    const { date } = req.body
    const newReservation = new Date(date)
    reservedDates.push(newReservation)
    res.status(200).json({ message: 'Reservation added successfully' })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}