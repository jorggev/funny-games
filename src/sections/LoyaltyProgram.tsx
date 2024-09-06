/* DESHABILITADO POR TIEMPO INDETERMINADO */

/* CREAR UN SISTEMA DE FIDELIZACION ---> PARA ESTO LOS USUARIOS DEBERAN TENER QUE REGISTRARSE */

import SectionTitle from '../components/SectionTitle';
import { StarIcon, GiftIcon, PercentIcon } from 'lucide-react';

export default function LoyaltyProgram() {
  return (
    <section id="programa-fidelizacion" className="flex-1">
      <SectionTitle title="Programa de Fidelización" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-pastel-blue-600">¡Premia tu lealtad!</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <StarIcon className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0" />
            <span>Acumula 1 punto por cada $100 gastados en nuestros servicios.</span>
          </li>
          <li className="flex items-start">
            <GiftIcon className="w-6 h-6 mr-2 text-pastel-blue-600 flex-shrink-0" />
            <span>Canjea tus puntos por horas adicionales de juego o descuentos en tu próximo evento.</span>
          </li>
          <li className="flex items-start">
            <PercentIcon className="w-6 h-6 mr-2 text-green-500 flex-shrink-0" />
            <span>Obtén un 5% de descuento en tu tercer evento y un 10% a partir del quinto.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}