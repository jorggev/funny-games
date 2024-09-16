import React from 'react'
import { CreditCard, Banknote, Smartphone, Bitcoin } from 'lucide-react'

const PaymentMethods: React.FC = () => {
  return (
    <section id="medios-de-pago" className="bg-white rounded-lg border mt-6 mr-5 p-4">
      <h2 className="text-2xl font-bold mb-4 text-pastel-blue-800">Medios de pago</h2>
      <div>
        <div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-pastel-blue-500" />
              <span>Tarjetas de crédito/débito</span>
            </li>
            <li className="flex items-center">
              <Banknote className="w-6 h-6 mr-2 text-pastel-blue-500" />
              <span>Efectivo</span>
            </li>
            <li className="flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-pastel-blue-500" />
              <span>Transferencia bancaria</span>
            </li>
            <li className="flex items-center">
              <Bitcoin className="w-6 h-6 mr-2 text-pastel-blue-500" />
              <span>Criptomonedas (USDT, BTC, ETH)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods