/* import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from "./button"; */

export default function Header() {
/*   const { theme, setTheme } = useTheme(); */

  return (
    <header className="bg-gradient-to-r from-orange-600 to-orange-700 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">FUNNY GAMES</span>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-4 text-white">
            <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="#planes" className="hover:underline">Planes</a></li>
            <li><a href="#organizacion" className="hover:underline">Organización</a></li>
            <li><a href="#medios-de-pago" className="hover:underline">Medios de pago</a></li>
          </ul>
{/*           <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-white text-orange-500 hover:bg-orange-100 dark:bg-black dark:text-orange-400 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
        </nav>
      </div>
    </header>
  );
}