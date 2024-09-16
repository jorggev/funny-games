import SectionTitle from '../components/SectionTitle';
import Reservations from './Reservations';
import PaymentMethods from '../components/PaymentMethods';

export default function Organization() {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 my-8">
        <section id="organizacion" className="bg-whit">
        <SectionTitle title="¿Cómo nos organizamos?"/>
        <ol className="list-decimal list-inside">
          <li>Elige tu plan o contáctanos para un presupuesto personalizado.</li>
          <li>Reserva tu fecha con un anticipo del 50%.</li>
          <li>Confirmamos los detalles del evento una semana antes.</li>
          <li>Llegamos al lugar del evento con tiempo para la instalación.</li>
          <li>Disfrutas de los juegos durante el tiempo contratado.</li>
          <li>Nos encargamos del desmontaje y limpieza al finalizar.</li>
      <PaymentMethods/>
        </ol>
      </section>
      <Reservations />
    </div>
  );
}