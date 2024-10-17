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
      <div className="grid grid-cols-7 gap-2 mb-2 ">
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
              ${!isSameMonth(day, monthStart) ? 'text-gray-500 bg-gray-200' : 'bg-gray-200'} 
              ${isSelected ? 'bg-green-500 text-white' : 'bg-gray-200'} 
              ${isDisabled ? 'opacity-25 cursor-not-allowed bg-grey-400' : 'hover:bg-green-500 hover:text-white'}`}
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
    <div className="p-4 rounded-lg shadow-lg bg-[#fff]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default ChatDateSelector
