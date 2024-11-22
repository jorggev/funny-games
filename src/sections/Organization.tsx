import SectionTitle from '../components/SectionTitle';
import Reservations from './Reservations';
import PaymentMethods from '../components/PaymentMethods';

export default function Organization() {
  return (
    <section id="organizacion" className="mb-16 flex flex-col md:flex-row gap-8">
      {/* Sección de organización */}
      <div className="w-full md:w-1/2 bg-[#fff] border-2 border-[#f25e02] shadow-lg p-8  rounded-lg shadow-md">
        <SectionTitle title="¿COMO NOS ORGANIZAMOS?" />
        <ol className="list-decimal list-inside space-y-2">
          <li>Elige tu plan o contáctanos para un presupuesto personalizado.</li>
          <li>Reserva tu fecha con un anticipo del 50%.</li>
          <li>Confirmamos los detalles del evento una semana antes.</li>
          <li>Llegamos al lugar del evento con tiempo para la instalación.</li>
          <li>Disfrutas de los juegos durante el tiempo contratado.</li>
          <li>Nos encargamos del desmontaje y limpieza al finalizar.</li>
        </ol>
        <PaymentMethods />
      </div>
      <div className="w-full md:w-1/2 bg-[#fff] border-2 border-[#f25e02] shadow-lg p-8 rounded-lg shadow-md">
        <Reservations />
      </div>
    </section>
  );
}
