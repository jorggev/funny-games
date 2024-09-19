import React, { useState } from 'react'
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { collection, query, where } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase/config'
import SectionTitle from './SectionTitle'

const ReservedDates: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const startOfCurrentMonth = startOfMonth(currentMonth)
  const endOfCurrentMonth = endOfMonth(currentMonth)

  const [reservedDates, loading, error] = useCollection(
    query(
      collection(db, 'reservedDates'),
      where('date', '>=', startOfCurrentMonth),
      where('date', '<=', endOfCurrentMonth)
    )
  )

  const isDateReserved = (date: Date) => 
    reservedDates?.docs.some(doc => {
      const reservedDate = doc.data().date.toDate()
      return isSameDay(reservedDate, date)
    }) || false

  const changeMonth = (increment: number) => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, increment))
  }

  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth
  })

  if (loading) {
    return <div>Cargando fechas reservadas...</div>
  }

  if (error) {
    return <div>Error al cargar las fechas: {error.message}</div>
  }

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