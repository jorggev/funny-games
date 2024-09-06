import '../styles/ReservedDates.css'


// Ejemplo de reservas (en una aplicación real, esto vendría de una base de datos)
const reservations = [
  { date: '2023-06-15', plan: 'Básico' },
  { date: '2023-06-18', plan: 'Premium' },
  { date: '2023-06-20', plan: 'Estándar' },
]

export default function ReservedDates() {
  return (
    <section id="reservas" className="my-8">
      <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Fechas Reservadas</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reservations.map((reservation, index) => (
            <div key={index} className="bg-pastel-blue-100 p-4 rounded-lg">
              <p className="font-semibold">{reservation.date}</p>
              <p>Plan: {reservation.plan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}