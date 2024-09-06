
export default function Header() {
  return (
    <header className="bg-pastel-blue-100 shadow-md">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pastel-blue-800">Juegos Divertidos</h1>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#inicio" className="hover:text-pastel-blue-600">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-pastel-blue-600">Quiénes Somos</a></li>
            <li><a href="#planes" className="hover:text-pastel-blue-600">Planes</a></li>
            <li><a href="#organizacion" className="hover:text-pastel-blue-600">Organización</a></li>
            <li><a href="#medios-de-pago" className="hover:text-pastel-blue-600">Medios de pago</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}