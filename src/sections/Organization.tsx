import SectionTitle from '../components/SectionTitle';
import LoyaltyProgram from './LoyaltyProgram';

export default function Organization() {
  return (
    <div className="flex flex-col md:flex-row gap-8 my-8">
      <section id="organizacion" className="flex-1">
        <SectionTitle title="Cómo nos Organizamos" />
        <ol className="list-decimal list-inside">
          <li className="mb-2">Elige tu plan o contáctanos para un presupuesto personalizado.</li>
          <li className="mb-2">Reserva tu fecha con un anticipo del 50%.</li>
          <li className="mb-2">Confirmamos los detalles del evento una semana antes.</li>
          <li className="mb-2">Llegamos al lugar del evento con tiempo para la instalación.</li>
          <li className="mb-2">Disfrutas de los juegos durante el tiempo contratado.</li>
          <li>Nos encargamos del desmontaje y limpieza al finalizar.</li>
        </ol>
      </section>
      <LoyaltyProgram />
    </div>
  );
}