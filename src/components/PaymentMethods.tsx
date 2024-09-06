import React from 'react'
import { CreditCard, Banknote, Smartphone, Bitcoin, DollarSign, Percent } from 'lucide-react'

const PaymentMethods: React.FC = () => {
  return (
    <section id="medios-de-pago" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-pastel-blue-800">Medios de Pago y Promociones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-pastel-blue-600">Métodos de Pago Aceptados</h3>
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
        <div>
          <h3 className="text-xl font-semibold mb-3 text-pastel-blue-600">Promociones Especiales</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Percent className="w-6 h-6 mr-2 text-green-500" />
              <span>10% de descuento en pagos con efectivo</span>
            </li>
            <li className="flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-green-500" />
              <span>3 cuotas sin interés con tarjetas seleccionadas</span>
            </li>
            <li className="flex items-center">
              <Bitcoin className="w-6 h-6 mr-2 text-green-500" />
              <span>5% de descuento adicional en pagos con criptomonedas</span>
            </li>
            <li className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-green-500" />
              <span>Acumula puntos de fidelidad en cada reserva</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods