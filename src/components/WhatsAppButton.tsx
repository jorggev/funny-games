import { useState } from 'react'
import { MessagesSquare } from 'lucide-react'
import WhatsAppBot from './WhatsAppBot'
export default function WhatsAppButton() {
  const [showBot, setShowBot] = useState(false)

  const toggleBot = () => {
    setShowBot(prevState => !prevState)
  }

  return (
    <>
      <button
        onClick={toggleBot}
        className={`fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 ${showBot ? 'z-50' : ''}`}
      >
        <MessagesSquare className="h-6 w-6" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </button>
      {showBot && <WhatsAppBot onClose={toggleBot} isOpen={false} />}
    </>
  )
}