import SectionTitle from '../components/SectionTitle';
import PlanCard from '../components/PlanCard';
import { ClockIcon } from 'lucide-react';

export default function Plans() {
  return (
    <section id="planes" className="my-8">
      <SectionTitle title="Nuestros Planes" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <PlanCard
          title="Plan Básico"
          items={['1 Castillo inflable', '1 Metegol', 'Duración: 4 horas']}
          price="$XXX"
        />
        <PlanCard
          title="Plan Estándar"
          items={['2 Castillos inflables', '1 Metegol', '1 Mesa de tejo', 'Duración: 6 horas']}
          price="$XXX"
        />
        <PlanCard
          title="Plan Premium"
          items={['3 Castillos inflables', '2 Metegoles', '2 Mesas de tejo', 'Duración: 8 horas']}
          price="$XXX"
        />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-pastel-blue-700">Precios por Hora</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
            <span>Castillo inflable: $XX/hora</span>
          </li>
          <li className="flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
            <span>Metegol: $XX/hora</span>
          </li>
          <li className="flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
            <span>Mesa de tejo: $XX/hora</span>
          </li>
          <li className="flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
            <span>Otros juegos: $XX/hora</span>
          </li>
        </ul>
      </div>
    </section>
  );
}