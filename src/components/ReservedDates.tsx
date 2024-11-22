import React, { useState } from 'react'
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
  addDays
} from 'date-fns'
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

  const getDaysInMonth = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const days = []
    let day = startDate

    while (day <= endDate) {
      days.push(day)
      day = addDays(day, 1)
    }

    return days
  }

  if (loading) {
    return <div>Cargando fechas reservadas...</div>
  }

  if (error) {
    return <div>Error al cargar las fechas: {error.message}</div>
  }

  const daysInMonth = getDaysInMonth()

  // Array con los nombres de los días más descriptivos
  const weekDays = [
    'L',
    'M',
    'M',
    'J',
    'V',
    'S',
    'D'
  ]

  return (
    <section id="disponibilidad" className="flex-1">
      <SectionTitle title="FECHAS DISPONIBLES" />
      <p className="text-md">
        Aquí podrás ver nuestras fechas disponibles para que puedas realizar tu reserva con total anticipación.
      </p>
      <div className="bg-[#fff] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-pastel-blue-800 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-7" />
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
        <div className="text-center mb-6 text-sm font-medium text-pastel-blue-700">
          {format(currentMonth, 'MMMM yyyy', { locale: es }).replace(/^\w/, c => c.toUpperCase())}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-5 pl-5">
          {weekDays.map(day => (
            <div key={day} className="text-xs font-medium text-pastel-blue-600 font-bold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 pl-5">
          {daysInMonth.map((date, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center text-sm rounded-full ${!isSameMonth(date, currentMonth)
                  ? 'text-gray-300'
                  : isDateReserved(date)
                    ? 'bg-orange-500 text-white'
                    : 'bg-pastel-blue-100 text-pastel-blue-600'
                }`}
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
        {/*         <div className="text-xs text-gray-500 flex items-center justify-center mt-4">
          <div className="w-3 h-3 bg-orange-500 text-white rounded-full"></div>
          <span className="mr-3">Reservado</span>
        </div> */}
        <div className="text-xs text-gray-500 flex items-center justify-center mt-4">
          <div className="w-3 h-3 bg-orange-500 text-white rounded-full flex items-center justify-center">
            <span className="ml-3">Reservado</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReservedDates