
import {TrendingUp, Clock, DollarSign, BarChart3, ArrowRight} from 'lucide-react';

const ForRestaurants = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumenta tu concentración",
      description: "Llega a más actividades y aumenta tus emociones."
    },
    {
      icon: Clock,
      title: "Gestión Eficiente",
      description: "Panel de control intuitivo para manejar tus motivaciones diarias."
    },
    {
      icon: DollarSign,
      title: "Suscripción sin comisiones",
      description: "Al ser una comunidad, las ganancias no son el objetivo principal, sino tu bienestar."
    }
  ];

  return (
    <section id="para-restaurantes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Acompañamineto.
              <span className="text-orange-600"> Haz tu diagnóstico con nosotros </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cuéntanos como te sientes y podremos ayudarte. 
              Nuestra plataforma está diseñada para ayudar a personas de manera empática, para   
              prosperar en la era digital y redes sociales.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <benefit.icon className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScKdMvNwXslo6ubJEqhXJy8XN_PMH4w-RdyLKHCXChJ3ERLVQ/viewform?usp=header" target="_blank"
                 className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors mr-4">
                Compartir Historia
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://img.freepik.com/vector-premium/inteligencia-emocional-equilibrio-control-emociones-habilidad-eq-desarrollo-caracter-profundidad_277904-39705.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Chef latino preparando comida"
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Success metrics overlay */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-green-600 font-bold text-2xl">+40%</div>
              <div className="text-sm text-gray-600">Mejoras de Usuarios</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-blue-600 font-bold text-2xl">4.9★</div>
              <div className="text-sm text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRestaurants;
