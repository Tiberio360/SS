
import { ArrowRight, Users, Truck, Store } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-teal-50 to-orange-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Creciendo juntos,
              <span className="text-teal-500"> conectados</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
             Integramos tecnología, psicología y educación 
             para crear experiencias de aprendizaje digital 
             que prioricen tanto el rendimiento académico 
             como el bienestar emocional dentro de la web, así como redes sociales. 
             No solo te ayudamos a aprender: te acompañamos para que lo hagas de manera
             saludable, consciente y sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/*<button className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Ayúdanos a Conocerte
                <ArrowRight className="ml-2" size={20} />
              </button>*/}
              <a href="https://www.adictalia.es/test/test-adiccion-movil/" target="_blank"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Ayúdanos a Conocerte
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://centropsicalma.com/wp-content/uploads/2023/02/influencia-de-las-emociones.jpg
"
                alt="Equipo de repartidores latinos"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <svg className="mx-auto text-blue-500 mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-700">Meditación</p>
                </div>
                <div className="p-4">
                  <svg className="mx-auto text-orange-500 mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2l4-4M7 12v6h10v-6m-4 0V6m0 0L9 4m4 2l4-2" />
                      </svg>
                  <p className="text-sm font-semibold text-gray-700">Acompañamiento</p>
                </div>
                <div className="p-4">
                  <Users className="mx-auto text-slate-600 mb-2" size={32} />
                  <p className="text-sm font-semibold text-gray-700">Psicólogos</p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-teal-500 text-white p-4 rounded-lg shadow-lg animate-pulse">
              <p className="text-sm font-semibold">¡Podemos Ayudarte!</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg animate-pulse">
              <p className="text-sm font-semibold">Un Cambio...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
