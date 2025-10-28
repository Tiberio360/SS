
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/enjova_pin.png"
              alt="enjova logo" 
              className="h-8 w-auto mr-3"
            />
            <div className="text-2xl font-bold text-slate-800">
              Mind Learn
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-teal-500 transition-colors">
              Inicio
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-teal-500 transition-colors">
              ¿Qué ofrecemos?
            </a>
            <a href="#para-restaurantes" className="text-gray-700 hover:text-teal-500 transition-colors">
              Actividades
            </a>
            <a href="#para-repartidores" className="text-gray-700 hover:text-teal-500 transition-colors">
              Seguimiento
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-teal-500 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.psychologytoday.com/mx/test/personalidad/estabilidad-emocional" target="_blank" className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Test Emocional
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                Inicio
              </a>
              <a href="#como-funciona" className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                Cómo Funciona
              </a>
              <a href="#para-restaurantes" className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                Restaurantes
              </a>
              <a href="#para-repartidores" className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                Repartidores
              </a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                Contacto
              </a>
              <a href="https://forms.gle/XixVtiYxmAYsi6iT7" target="_blank" className="w-full bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors mt-4">
                Únete Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
