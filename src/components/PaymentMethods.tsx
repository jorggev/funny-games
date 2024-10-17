import React from 'react'
import SectionTitle from '../components/SectionTitle';
import { CreditCard, Banknote, Smartphone, Bitcoin } from 'lucide-react'

const PaymentMethods: React.FC = () => {
  return (
    <section id="medios-de-pago" className="mt-10">
      <SectionTitle title="MEDIOS DE PAGO"/>
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