import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pastel-blue-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-pastel-blue-800 font-semibold">&copy; 2024 Funny Games.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="https://www.instagram.com/funny.gameschaco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pastel-blue-800 hover:text-pastel-blue-600"
            >
              <FaInstagram className="w-5 h-5 mr-2" />
              <span>Seguinos en Instagram</span>
            </a>
            <a
              id="terminos-y-condiciones"
              href="/"
              className="text-pastel-blue-800 hover:text-pastel-blue-600"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}