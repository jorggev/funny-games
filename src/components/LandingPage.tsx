import { CreditCardIcon, ShieldCheckIcon, ClockIcon, PackageIcon, MessagesSquare, StarIcon, GiftIcon, PercentIcon } from 'lucide-react'
import { useState } from 'react'
import image1 from '../assets/images/Designer.jpeg'
import image2 from '../assets/images/Designer (1).jpeg'
import image3 from '../assets/images/Designer (2).jpeg'
import image4 from '../assets/images/Designer (3).jpeg'

export default function LandingPage() {

  const [hours, setHours] = useState(1)
  const [selectedGame, setSelectedGame] = useState<'castillo' | 'metegol' | 'tejo' | 'castillo2'>('castillo');

  const hourlyRates = {
    castillo: 20000,
    metegol: 3000,
    tejo: 4000,
    castillo2: 35000
  }

  const calculatePrice = () => {
    return hours * hourlyRates[selectedGame];
  }

  // Ejemplo de reservas (en una aplicación real, esto vendría de una base de datos)
  const reservations = [
    { date: '2023-06-15', plan: 'Básico' },
    { date: '2023-06-18', plan: 'Premium' },
    { date: '2023-06-20', plan: 'Estándar' },
  ]

  return (
    <div className="min-h-screen bg-pastel-blue-50 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pastel-blue-800">FUNNY GAMES</h1>
            <ul className="hidden md:flex space-x-4">
              <li><a href="#inicio" className="hover:text-pastel-blue-600">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-pastel-blue-600">Quiénes Somos</a></li>
              <li><a href="#planes" className="hover:text-pastel-blue-600">Planes</a></li>
              <li><a href="#organizacion" className="hover:text-pastel-blue-600">Organización</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section id="inicio" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Bienvenidos a Juegos Divertidos</h2>
          <p className="mb-4">Ofrecemos una amplia variedad de juegos inflables y de entretenimiento para hacer de tu evento una experiencia inolvidable.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img src={image1} alt="Castillo inflable" className="rounded-lg shadow-md" />
            <img src={image2} alt="Metegol" className="rounded-lg shadow-md" />
            <img src={image3} alt="Mesa de tejo" className="rounded-lg shadow-md" />
            <img src={image4} alt="Castillo inflable" className="rounded-lg shadow-md" />
          </div>
        </section>

        <section id="quienes-somos" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Quiénes Somos</h2>
          <p>Somos una empresa dedicada a llevar diversión a tus eventos. Nuestra misión es crear momentos inolvidables a través de juegos emocionantes y seguros. Nos distinguimos por nuestra calidad de servicio y atención personalizada.</p>
        </section>

        <section id="planes" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Nuestros Planes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-pastel-blue-600">Plan Básico</h3>
              <ul className="list-disc list-inside mb-4">
                <li>1 Castillo inflable</li>
                <li>1 Metegol</li>
                <li>Duración: 4 horas</li>
              </ul>
              <p className="font-bold">Precio: $XXX</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-pastel-blue-600">Plan Estándar</h3>
              <ul className="list-disc list-inside mb-4">
                <li>2 Castillos inflables</li>
                <li>1 Metegol</li>
                <li>1 Mesa de tejo</li>
                <li>Duración: 6 horas</li>
              </ul>
              <p className="font-bold">Precio: $XXX</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-pastel-blue-600">Plan Premium</h3>
              <ul className="list-disc list-inside mb-4">
                <li>3 Castillos inflables</li>
                <li>2 Metegoles</li>
                <li>2 Mesas de tejo</li>
                <li>Duración: 8 horas</li>
              </ul>
              <p className="font-bold">Precio: $XXX</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-pastel-blue-700">Precios por Hora</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">¿Necesitas más flexibilidad? Contrata nuestros juegos por hora:</p>
                <ul className="space-y-2">
                  {Object.entries(hourlyRates).map(([key, rate]) => (
                    <li key={key} className="flex items-center">
                      <ClockIcon className="w-6 h-6 mr-2 text-pastel-blue-600" />
                      <span>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: ${rate}/hora
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
                    /* onChange={(e) => setSelectedGame(e.target.value)} */
                    onChange={(e) => setSelectedGame(e.target.value as 'castillo' | 'metegol' | 'tejo' | 'castillo2')}
                    className="w-full p-2 border rounded"
                  >
                    <option value="castillo">Castillo 1</option>
                    <option value="metegol">Metegol</option>
                    <option value="tejo">Mesa de tejo</option>
                    <option value="castillo2">Castillo 2</option>
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
        </section>

        <section id="reservas" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Reservas Existentes</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-pastel-blue-600">Fechas Reservadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reservations.map((reservation, index) => (
                <div key={index} className="bg-pastel-blue-100 p-4 rounded-lg">
                  <p className="font-semibold">{reservation.date}</p>
                  <p>Plan: {reservation.plan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-8 my-8">
          <section id="organizacion" className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Cómo nos Organizamos</h2>
            <ol className="list-decimal list-inside">
              <li className="mb-2">Elige tu plan o contáctanos para un presupuesto personalizado.</li>
              <li className="mb-2">Reserva tu fecha con un anticipo del 50%.</li>
              <li className="mb-2">Confirmamos los detalles del evento una semana antes.</li>
              <li className="mb-2">Llegamos al lugar del evento con tiempo para la instalación.</li>
              <li className="mb-2">Disfrutas de los juegos durante el tiempo contratado.</li>
              <li>Nos encargamos del desmontaje y limpieza al finalizar.</li>
            </ol>
          </section>

          <section id="programa-fidelizacion" className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Programa de Fidelización</h2>
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
        </div>

        <section id="info-importante" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-pastel-blue-800">Información Importante</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-pastel-blue-600 flex items-center">
                <CreditCardIcon className="w-6 h-6 mr-2" />
                Medios de Pago
              </h3>
              <ul className="list-disc list-inside">
                <li>Efectivo</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas de crédito/débito</li>
                <li>Pago móvil</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-pastel-blue-600 flex items-center">
                <ShieldCheckIcon className="w-6 h-6 mr-2" />
                Seguridad y Responsabilidad
              </h3>
              <ul className="list-disc list-inside">
                <li>Seguro de responsabilidad civil</li>
                <li>Equipos con certificación de seguridad</li>
                <li>Personal capacitado en primeros auxilios</li>
                <li>Protocolo de higiene y desinfección</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-pastel-blue-600 flex items-center">
                <PackageIcon className="w-6 h-6 mr-2" />
                Política de Cancelación
              </h3>
              <ul className="list-disc list-inside">
                <li>Cancelación gratuita hasta 72 horas antes del evento</li>
                <li>50% de reembolso si se cancela entre 72 y 24 horas antes</li>
                <li>Sin reembolso si se cancela con menos de 24 horas de anticipación</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pastel-blue-200 p-4 text-center">
        <p>&copy; 2023 Juegos Divertidos. Todos los derechos reservados.</p>
      </footer>

      <a
        href="https://wa.me/+543624569403"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >

        <MessagesSquare className="h-6 w-6" /* ACA TIENE QUE IR EL ICONO DE WHATSAPP */ />
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>
    </div>
  )
}