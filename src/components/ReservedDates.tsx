import React, { useState, useEffect } from 'react'
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import SectionTitle from './SectionTitle'

const ReservedDates: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [reservedDates, setReservedDates] = useState<Date[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReservedDates = async () => {
      // Verificar si `db` está configurado correctamente
      if (!db) {
        setError("Error de configuración de Firebase")
        setIsLoading(false)
        return
      }

      setIsLoading(true) // Iniciar carga
      const startDate = startOfMonth(currentMonth)
      const endDate = endOfMonth(currentMonth)

      // Crear la consulta a Firebase
      const q = query(
        collection(db, 'reservedDates'),
        where('date', '>=', startDate),
        where('date', '<=', endDate)
      )

      try {
        // Obtener los datos de Firebase
        const querySnapshot = await getDocs(q)
        const dates = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return data.date.toDate() // Asegurar que la fecha sea de tipo Date
        })
        setReservedDates(dates) // Establecer las fechas reservadas
        setError(null) // Reiniciar errores
      } catch (error) {
        console.error("Error fetching reserved dates:", error)
        setError("Error al cargar las fechas reservadas")
      } finally {
        setIsLoading(false) // Finalizar carga
      }
    }

    fetchReservedDates() // Llamar a la función cuando cambie el mes
  }, [currentMonth])

  const isDateReserved = (date: Date) => 
    reservedDates.some(reservedDate => isSameDay(reservedDate, date))

  const changeMonth = (increment: number) => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, increment))
  }

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  })

  // Renderizar la carga
  if (isLoading) {
    return <div>Cargando fechas reservadas...</div>
  }

  // Renderizar error si ocurrió
  if (error) {
    return <div>Error: {error}</div>
  }

  // Renderizar el calendario
  return (
    <section id="disponibilidad" className="flex-1">
      <SectionTitle title="Fechas disponibles" />
      <div className="bg-white p-4 rounded-lg shadow-md border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-pastel-blue-800 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Calendario
          </h2>
          <div className="flex space-x-2">
            <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-pastel-blue-100">
              <ChevronLeft className="w-5 h-5 text-pastel-blue-600" />
            </button>
            <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-pastel-blue-100">
              <ChevronRight className="w-5 h-5 text-pastel-blue-600" />
            </button>
          </div>
        </div>
        <div className="text-center mb-2 text-sm font-medium text-pastel-blue-700">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(day => (
            <div key={day} className="text-xs font-medium text-pastel-blue-500">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {daysInMonth.map((date, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center text-sm rounded-full ${
                !isSameMonth(date, currentMonth)
                  ? 'text-gray-300'
                  : isDateReserved(date)
                  ? 'bg-red-100 text-red-600'
                  : 'bg-pastel-blue-100 text-pastel-blue-600'
              }`}
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500 flex items-center justify-center">
          <div className="w-3 h-3 bg-red-100 mr-1 rounded-full"></div>
          <span className="mr-3">Reservado</span>
          <div className="w-3 h-3 bg-pastel-blue-100 ml-3 mr-1 rounded-full"></div>
          <span>Disponible</span>
        </div>
      </div>
    </section>
  )
}

export default ReservedDates
