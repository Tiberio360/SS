
import {MapPin, Banknote, Smartphone, Trophy, ArrowRight} from 'lucide-react';

const ForDelivery = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Sin comisiones, ni cobros adicionales.",
      description: "Sin letras chiquitas ni membresias. Tu bienestar es primero porque nos importas"
    },
    {
      icon: Smartphone,
      title: "Trabaja con tus emociones",
      description: "Puedes meditar con actividdes y decirnos como te sientes."
    }
  ];

  return (
    <section id="para-repartidores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://img.freepik.com/vector-premium/relajacion-dejar-que-ansiedad-pensamientos-negativos-huyan-mentalmente-aliviar-o-atencion-curar_926199-3923399.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Repartidor latino en motocicleta"
              className="rounded-2xl shadow-2xl"
            />

            {/* Earnings overlay */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-green-600 font-bold text-2xl">800+</div>
              <div className="text-sm text-gray-600"> Usuarios Mensuales</div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-blue-600 font-bold text-2xl">24/7</div>
              <div className="text-sm text-gray-600">Disponible</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Seguimiento.
              <span className="text-blue-600"> Tu Libertad Emocional, cuentanos como te sientes.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Completa tu diagnóstico y te ayudaremos a mejorar.
              Maneja tus horarios, maximiza tus sesiones y forma parte
              de una comunidad que valora tu esfuerzo y trabajo.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <benefit.icon className="text-blue-600" size={24} />
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
                <a href="https://t.me/mind_my_emotions_bot" target="_blank"
                   className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4">
                    -- Acompañamiento Digital --
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDelivery;
