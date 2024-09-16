import { ClockIcon } from 'lucide-react'
import { useState } from 'react'



export default function PriceCalculator() {
    const [hours, setHours] = useState(1)
    const [selectedGame, setSelectedGame] = useState<'Castillo 3x4' | 'Metegol' | 'Tejo' | 'Castillo 4x6'>('Castillo 3x4');
  
    const hourlyRates = {
      'Castillo 3x4': 8000,
      'Castillo 4x6': 10000,
      'Metegol': 7000,
      'Tejo': 7000,
    }
  
    const calculatePrice = () => {
      return hours * hourlyRates[selectedGame];
    }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-pastel-blue-700">Precios por hora</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
                <p className="mb-4">¿Necesitas más flexibilidad? Contrata nuestros juegos por hora:</p>
                <ul className="space-y-2">
                  {Object.entries(hourlyRates).map(([key, rate]) => (
                    <li key={key} className="flex items-center">
                      <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
                      <span>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: ${rate}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
        <div className="bg-pastel-blue-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Calculadora de Precios</h4>
          <div className="mb-2">
            <label htmlFor="game" className="block mb-1">Selecciona el juego:</label>
            <select
              id="game"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value as 'Castillo 3x4' | 'Metegol' | 'Tejo' | 'Castillo 4x6')}
              className="w-full p-2 border rounded"
            >
              <option value="Castillo 3x4">Castillo 3x4</option>
              <option value="Metegol">Metegol</option>
              <option value="Tejo">Tejo</option>
              <option value="Castillo 4x6">Castillo 4x6</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="hours" className="block mb-1">Número de horas:</label>
            <input
              type="number"
              id="hours"
              min="1"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <p className="font-bold text-lg">
            Precio estimado: ${calculatePrice()}
          </p>
        </div>
      </div>
    </div>
  )
}