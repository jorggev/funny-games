import React from 'react'
import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  )
}

export default ErrorMessage