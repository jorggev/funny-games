import React, { useState } from 'react'
import { X, Send, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import DateSelector from './ChatDateSelector'

type Option = {
  text: string
  next?: string
  price?: number
}

type Step = {
  question: string
  options: Option[]
}

const steps: { [key: string]: Step } = {
  start: {
    question: "¿En qué estás interesado?",
    options: [
      { text: "Planes", next: "planes" },
      { text: "Otra consulta", next: "other" }
    ]
  },
  planes: {
    question: "¿Qué plan te interesa?",
    options: [
      { text: "Plan 3x4", price: 24000, next: "dates" },
      { text: "Plan 4x6", price: 28000, next: "dates" },
      { text: "Solo 3x4", price: 20000, next: "dates" },
      { text: "Solo 4x6", price: 25000, next: "dates" }
    ]
  },
  dates: {
    question: "Selecciona una fecha",
    options: []
  },
  other: {
    question: "¿Sobre qué tema te gustaría consultar?",
    options: [{ text: "Otro tema" }]
  }
}

const WhatsAppBot: React.FC<{ onClose: () => void, isOpen: boolean }> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState('start')
  const [selections, setSelections] = useState<{ [key: string]: string }>({})
  const [history, setHistory] = useState<string[]>(['start'])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSelection = (option: Option) => {
    const newSelections = { ...selections, [currentStep]: option.text }
    setSelections(newSelections)

    if (option.price) {
      setTotalPrice(option.price)
    } else if (currentStep === 'start' && option.text === "Otra consulta") {
      setTotalPrice(0)
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

      // Reset price if going back to start
      if (previousStep === 'start') {
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
    <div
      className="fixed bottom-20 right-4 w-80 bg-[#fff] rounded-lg shadow-xl p-4 z-40"
      style={{
        border: '2px solid #6b7280',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 bg-transparent"
        style={{ width: '24px', height: '24px' }}
      >
        <X className="h-4 w-4 text-gray-500" />
      </button>
      <h3 className="text-lg font-bold mb-4">{steps[currentStep].question}</h3>
      {history.length > 1 && (
        <button onClick={handleBack} className="mb-2 flex items-center text-pastel-blue-600">
          <ArrowLeft className="h-4 w-4 mr-1 border-1" />
          Volver
        </button>
      )}
      <div className="space-y-2 ">
        {currentStep === 'dates' ? (
          <>
            <DateSelector onDateSelect={handleDateSelection} />
          </>
        ) : (
          steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelection(option)}
              className={`w-full text-left p-2 rounded flex justify-between items-center  ${
                selections[currentStep] === option.text
                  ? 'bg-pastel-blue-300 hover:bg-orange-200'
                  : 'bg-pastel-blue-100 hover:bg-orange-200'
              }`}
            >
              <span>{option.text}</span>
              {option.price && <span className="font-bold text-orange-500">${option.price}</span>}
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