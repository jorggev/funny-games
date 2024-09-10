import React from 'react'
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

export default ChatDateSelector