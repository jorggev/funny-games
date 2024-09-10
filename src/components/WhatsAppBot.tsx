import React, { useState, useEffect } from 'react'
import { X, Send, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import axios from 'axios'
import DateSelector from './DateSelector'
import ErrorMessage from './ErrorMessage'

type Option = {
  text: string
  next?: string
  price?: number
}

type Step = {
  question: string
  options: Option[]
}

const API_URL = 'http://localhost:3000/api/reserved-dates'

const steps: { [key: string]: Step } = {
  start: {
    question: "¿En qué estás interesado?",
    options: [
      { text: "Planes completos", next: "planes" },
      { text: "Alquiler por hora", next: "hourly" },
      { text: "Otra consulta", next: "other" }
    ]
  },
  planes: {
    question: "¿Qué plan te interesa?",
    options: [
      { text: "Plan Básico", price: 5000, next: "dates" },
      { text: "Plan Estándar", price: 8000, next: "dates" },
      { text: "Plan Premium", price: 12000, next: "dates" }
    ]
  },
  hourly: {
    question: "¿Qué juego te interesa alquilar por hora?",
    options: [
      { text: "Castillo inflable", price: 1000, next: "hours" },
      { text: "Metegol", price: 500, next: "hours" },
      { text: "Mesa de tejo", price: 700, next: "hours" },
      { text: "Otros juegos", price: 600, next: "hours" }
    ]
  },
  hours: {
    question: "¿Cuántas horas deseas alquilar?",
    options: [
      { text: "1 hora", next: "dates" },
      { text: "2 horas", next: "dates" },
      { text: "3 horas", next: "dates" },
      { text: "4 horas o más", next: "dates" }
    ]
  },
  dates: {
    question: "Fechas disponibles",
    options: []
  },
  other: {
    question: "¿Sobre qué tema te gustaría consultar?",
    options: [
      { text: "Otro tema" }
    ]
  }
}

const WhatsAppBot: React.FC<{ onClose: () => void, isOpen: boolean }> = ({ onClose, isOpen }) => {
  const [currentStep, setCurrentStep] = useState('start')
  const [selections, setSelections] = useState<{ [key: string]: string }>({})
  const [history, setHistory] = useState<string[]>(['start'])
  const [totalPrice, setTotalPrice] = useState(0)
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [reservedDates, setReservedDates] = useState<Date[]>([])
  const [dateError, setDateError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) {
      resetBot()
    } else {
      fetchDates()
      const interval = setInterval(fetchDates, 60000) // Update every minute
      return () => clearInterval(interval)
    }
  }, [isOpen])

  const fetchDates = async () => {
    try {
      const response = await axios.get(`${API_URL}`)
      setAvailableDates(response.data.availableDates.map((d: string) => new Date(d)))
      setReservedDates(response.data.reservedDates.map((d: string) => new Date(d)))
      setDateError(null)
    } catch (err) {
      setDateError('Error al cargar las fechas. Por favor, intenta de nuevo más tarde.')
      console.error('Error fetching dates:', err)
    }
  }

  const resetBot = () => {
    setCurrentStep('start')
    setSelections({})
    setHistory(['start'])
    setTotalPrice(0)
    setDateError(null)
  }

  const handleSelection = (option: Option) => {
    const newSelections = { ...selections, [currentStep]: option.text }
    setSelections(newSelections)

    if (option.price) {
      if (currentStep === 'hourly') {
        setTotalPrice(option.price) // Store the hourly rate
      } else {
        setTotalPrice(option.price)
      }
    }
    if (currentStep === 'hours') {
      const hours = parseInt(option.text)
      setTotalPrice(totalPrice * hours)
    }
    if (option.next) {
      setCurrentStep(option.next)
      setHistory([...history, option.next])
    }
  }

  const handleDateSelection = (date: Date) => {
    const formattedDate = format(date, 'EEEE, d MMMM yyyy', { locale: es })
    handleSelection({ text: formattedDate })
  }

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      const previousStep = newHistory[newHistory.length - 1]
      setHistory(newHistory)
      setCurrentStep(previousStep)
      const newSelections = { ...selections }
      delete newSelections[currentStep]
      setSelections(newSelections)
      // Reset price when going back
      if (currentStep === 'dates' || currentStep === 'hours') {
        setTotalPrice(0)
      }
    }
  }

  const prepareMessage = () => {
    const selectedOptions = Object.values(selections).filter(Boolean)
    let message = `Hola, estoy interesado en: ${selectedOptions.join(" > ")}.`
    if (totalPrice > 0) {
      message += ` Precio estimado: $${totalPrice}.`
    }
    message += " ¿Podrían darme más información?"
    return message
  }

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(prepareMessage())
    window.open(`https://wa.me/+543624559999?text=${message}`, '_blank')
    onClose()
  }

  const isQueryComplete = currentStep === 'dates' || currentStep === 'other'

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl p-4 z-40">
      <button onClick={onClose} className="absolute top-2 right-2">
        <X className="h-6 w-6 text-gray-500" />
      </button>
      <h3 className="text-lg font-bold mb-4">{steps[currentStep].question}</h3>
      {history.length > 1 && (
        <button onClick={handleBack} className="mb-2 flex items-center text-pastel-blue-600">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </button>
      )}
      <div className="space-y-2">
        {currentStep === 'dates' ? (
          <>
            <DateSelector
              availableDates={availableDates}
              reservedDates={reservedDates}
              onDateSelect={handleDateSelection}
            />
            {dateError && <ErrorMessage message={dateError} />}
          </>
        ) : (
          steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelection(option)}
              className={`w-full text-left p-2 rounded flex justify-between items-center ${
                selections[currentStep] === option.text
                  ? 'bg-pastel-blue-300 hover:bg-pastel-blue-400'
                  : 'bg-pastel-blue-100 hover:bg-pastel-blue-200'
              }`}
            >
              <span>{option.text}</span>
              {option.price && <span className="font-bold">${option.price}</span>}
            </button>
          ))
        )}
      </div>
      {totalPrice > 0 && (
        <div className="mt-4 text-right">
          <p className="font-bold">Precio estimado: ${totalPrice}</p>
        </div>
      )}
      {isQueryComplete && (
        <div className="mt-4">
          <h4 className="font-bold mb-2">Tu consulta:</h4>
          <p className="mb-2">{prepareMessage()}</p>
          <button
            onClick={sendToWhatsApp}
            className="w-full bg-green-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Send className="h-5 w-5 mr-2" />
            Enviar consulta por WhatsApp
          </button>
        </div>
      )}
    </div>
  )
}

export default WhatsAppBot