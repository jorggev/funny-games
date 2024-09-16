/* import React from 'react'
import { format, addDays } from 'date-fns'
import { es } from 'date-fns/locale'

interface ChatDateSelectorProps {
  onDateSelect: (date: Date) => void
}

const ChatDateSelector: React.FC<ChatDateSelectorProps> = ({ onDateSelect }) => {
  const today = new Date()
  const dateOptions = Array.from({ length: 31 }, (_, i) => addDays(today, i))

  return (
    <select
      onChange={(e) => onDateSelect(new Date(e.target.value))}
      className="w-full p-2 border rounded mt-2"
    >
      <option value="">Selecciona una fecha</option>
      {dateOptions.map((date, index) => (
        <option key={index} value={date.toISOString()}>
          {format(date, 'EEEE, d MMMM yyyy', { locale: es })}
        </option>
      ))}
    </select>
  )
}

export default ChatDateSelector */

/* import React from 'react'
import { format, addDays } from 'date-fns'
import { es } from 'date-fns/locale'

interface ChatDateSelectorProps {
  onDateSelect: (date: Date) => void
}

const ChatDateSelector: React.FC<ChatDateSelectorProps> = ({ onDateSelect }) => {
  const today = new Date()
  const dateOptions = Array.from({ length: 31 }, (_, i) => addDays(today, i))

  return (
    <select
      onChange={(e) => onDateSelect(new Date(e.target.value))}
      className="w-full p-2 border rounded mt-2"
    >
      <option value="">Selecciona una fecha</option>
      {dateOptions.map((date, index) => (
        <option key={index} value={date.toISOString()}>
          {format(date, 'EEEE, d MMMM yyyy', { locale: es })}
        </option>
      ))}
    </select>
  )
}

export default ChatDateSelector */

/* import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths } from 'date-fns'
import { es } from 'date-fns/locale'

interface ChatDateSelectorProps {
  onDateSelect: (date: Date) => void
}

const ChatDateSelector: React.FC<ChatDateSelectorProps> = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const handlePrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-pastel-blue-600 font-bold">&lt;</button>
        <h2 className="text-lg font-bold">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </h2>
        <button onClick={handleNextMonth} className="text-pastel-blue-600 font-bold">&gt;</button>
      </div>
    )
  }

  const renderDays = () => {
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    return (
      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-semibold">{day}</div>
        ))}
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd')
        const cloneDay = day
        days.push(
          <div
            key={day.toString()}
            className={`p-2 text-center rounded-lg cursor-pointer 
              ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''} 
              ${isSameDay(day, new Date()) ? 'bg-pastel-blue-300 text-white' : 'bg-gray-100 hover:bg-pastel-blue-200'}`
            }
            onClick={() => onDateSelect(cloneDay)}
          >
            {formattedDate}
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2 mb-2">
          {days}
        </div>
      )
      days = []
    }
    return <div>{rows}</div>
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default ChatDateSelector */

/* import React, { useState } from 'react'
import { format, addDays, isBefore } from 'date-fns'
import { es } from 'date-fns/locale'

interface ChatDateSelectorProps {
  onDateSelect: (date: Date) => void
}

const ChatDateSelector: React.FC<ChatDateSelectorProps> = ({ onDateSelect }) => {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const dateOptions = Array.from({ length: 31 }, (_, i) => addDays(today, i - 15)) // Mostrando 15 días antes y 15 días después

  const handleDateClick = (date: Date) => {
    if (!isBefore(date, today)) {
      setSelectedDate(date)
      onDateSelect(date)
    }
  }

  return (
    <div className="grid grid-cols-7 gap-1">
      {dateOptions.map((date, index) => {
        const isDisabled = isBefore(date, today)
        const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')

        return (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            disabled={isDisabled}
            className={`w-10 h-10 rounded-full text-sm flex items-center justify-center 
              ${isSelected ? 'bg-green-500 text-white' : 'bg-gray-200'} 
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-300'}`
            }
          >
            {format(date, 'd', { locale: es })}
          </button>
        )
      })}
    </div>
  )
}

export default ChatDateSelector */

import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, isBefore } from 'date-fns'
import { es } from 'date-fns/locale'

interface ChatDateSelectorProps {
  onDateSelect: (date: Date) => void
}

const ChatDateSelector: React.FC<ChatDateSelectorProps> = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const today = new Date()

  // Navegar al mes anterior
  const handlePrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1))
  }

  // Navegar al mes siguiente
  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Lógica para renderizar el encabezado con los botones de navegación de mes
  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-pastel-blue-600 font-bold">&lt;</button>
        <h2 className="text-lg font-bold">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </h2>
        <button onClick={handleNextMonth} className="text-pastel-blue-600 font-bold">&gt;</button>
      </div>
    )
  }

  // Lógica para renderizar los días de la semana
  const renderDays = () => {
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    return (
      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-semibold">{day}</div>
        ))}
      </div>
    )
  }

  // Lógica para renderizar las celdas del calendario
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    // Mientras recorremos los días en el rango, creamos las celdas correspondientes
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd')
        const cloneDay = day

        const isDisabled = isBefore(day, today)
        const isSelected = selectedDate && isSameDay(day, selectedDate)

        days.push(
          <div
            key={day.toString()}
            className={`w-9 h-9 rounded-lg text-sm flex items-center justify-center cursor-pointer 
              ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''} 
              ${isSelected ? 'bg-green-500 text-white' : 'bg-gray-200'} 
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-300'}`}
            onClick={() => {
              if (!isDisabled) {
                setSelectedDate(cloneDay)
                onDateSelect(cloneDay)
              }
            }}
          >
            {formattedDate}
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-7 mb-2">
          {days}
        </div>
      )
      days = []
    }
    return <div>{rows}</div>
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default ChatDateSelector
