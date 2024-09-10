import React from 'react'
import { format, addDays, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'

interface DateSelectorProps {
  availableDates: Date[]
  reservedDates: Date[]
  onDateSelect: (date: Date) => void
}

const DateSelector: React.FC<DateSelectorProps> = ({ availableDates, reservedDates, onDateSelect }) => {
  const today = new Date()
  const dateRange = Array.from({ length: 30 }, (_, i) => addDays(today, i))

  const isDateAvailable = (date: Date) =>
    availableDates.some(availableDate => isSameDay(availableDate, date))

  const isDateReserved = (date: Date) =>
    reservedDates.some(reservedDate => isSameDay(reservedDate, date))

  return (
    <div className="date-selector">
      {/* Aquí se agrega el título o encabezado */}
      <h3 className="text-lg font-bold mb-4">Seleccionar fecha</h3>
      
      {/* Calendario con las fechas */}
      <div className="grid grid-cols-7 gap-1">
        {dateRange.map((date, index) => (
          <button
            key={index}
            onClick={() => isDateAvailable(date) && onDateSelect(date)}
            className={`p-2 text-sm rounded-full ${
              isDateReserved(date)
                ? 'bg-red-200 cursor-not-allowed'
                : isDateAvailable(date)
                ? 'bg-green-200 hover:bg-green-300'
                : 'bg-gray-200 cursor-not-allowed'
            }`}
            disabled={!isDateAvailable(date)}
            title={format(date, 'EEEE, d MMMM yyyy', { locale: es })}
          >
            {format(date, 'd')}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DateSelector