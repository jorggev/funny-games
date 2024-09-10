import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reservations', { useNewUrlParser: true, useUnifiedTopology: true });

const ReservationSchema = new mongoose.Schema({
  date: Date
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

app.get('/api/reserved-dates', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    const reservedDates = reservations.map(r => r.date);
    res.json(reservedDates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reserved dates', error });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
