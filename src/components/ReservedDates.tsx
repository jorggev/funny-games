import React, { useState, useEffect } from 'react'
import { format, addDays, isSameDay, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import { Calendar, Info } from 'lucide-react'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'

const API_URL = 'http://localhost:3000/api/reserved-dates';

/* const ReservedDates: React.FC = () => {
  const [reservedDates, setReservedDates] = useState<Date[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReservedDates = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(API_URL)
        const dates = response.data.map((dateString: string) => parseISO(dateString))
        setReservedDates(dates)
        setError(null)
      } catch (err) {
        setError('Error al cargar las fechas reservadas. Por favor, intenta de nuevo más tarde.')
        console.error('Error fetching reserved dates:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReservedDates()
  }, []) -------------------> V1 */

/* V2 */
  const ReservedDates: React.FC = () => {
    const [reservedDates, setReservedDates] = useState<Date[]>([])
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
      const fetchReservedDates = async () => {
        try {
          setIsLoading(true)
          const response = await axios.get(API_URL)
          const dates = response.data.map((dateString: string) => parseISO(dateString))
          setReservedDates(dates)
          setError(null)
        } catch (err) {
          setError('Error al cargar las fechas reservadas. Por favor, intenta de nuevo más tarde.')
          console.error('Error fetching reserved dates:', err)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchReservedDates()
    }, [])

  const today = new Date()
  /* const maxDate = addDays(today, 30) */
  const dateRange = Array.from({ length: 31 }, (_, i) => addDays(today, i))

  const isDateReserved = (date: Date) => 
    reservedDates.some(reservedDate => isSameDay(reservedDate, date))

  const handleDateClick = (date: Date) => {
    if (!isDateReserved(date)) {
      setSelectedDate(date)
    }
  }

  if (isLoading) {
    return <div>Cargando fechas reservadas...</div>
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-pastel-blue-800 flex items-center">
        <Calendar className="mr-2" />
        Fechas Disponibles
      </h2>
      <div className="mb-4 flex items-center">
        <div className="w-4 h-4 bg-pastel-blue-200 mr-2"></div>
        <span className="mr-4">Disponible</span>
        <div className="w-4 h-4 bg-red-200 mr-2"></div>
        <span>Reservado</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {dateRange.map((date, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-center cursor-pointer transition-colors duration-200 ${
              isDateReserved(date)
                ? 'bg-red-200 cursor-not-allowed'
                : selectedDate && isSameDay(selectedDate, date)
                ? 'bg-pastel-blue-400 text-white'
                : 'bg-pastel-blue-200 hover:bg-pastel-blue-300'
            }`}
            onClick={() => handleDateClick(date)}
            onMouseEnter={() => setHoveredDate(date)}
            onMouseLeave={() => setHoveredDate(null)}
          >
            {format(date, 'd')}
            {hoveredDate && isSameDay(hoveredDate, date) && (
              <div className="absolute z-10 bg-white p-2 rounded shadow-md text-sm">
                {format(date, 'EEEE, d MMMM yyyy', { locale: es })}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="mt-4">
          <p className="font-bold">Fecha seleccionada:</p>
          <p>{format(selectedDate, 'EEEE, d MMMM yyyy', { locale: es })}</p>
        </div>
      )}
      <div className="mt-4 flex items-center text-sm text-gray-600">
        <Info className="mr-2" size={16} />
        <p>Puedes reservar hasta 30 días en adelante.</p>
      </div>
    </div>
  )
}

export default ReservedDates