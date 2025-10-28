import { Store, Smartphone, Truck, Users, ArrowRight  } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Store,
      title: "Te Leemos y escuchamos",
      description: "Ayuda por medio de acompañamineto digital.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Smartphone,
      title: "Construimos",
      description: "Nosotros buscamos diseñar una solución tecnológica para todos.",
      color: "bg-slate-100 text-slate-600"
    },
    {
      icon: Truck,
      title: "Formas parte",
      description: "Otorgamos acceso a las herramientas y acompañamiento tan pronto sea posible",
      color: "bg-slate-100 text-slate-600"
    },
    {
      icon: Users,
      title: "Comunidad Crece",
      description: "Con buena comunicación y energía, volvemos a comenzar para mejorar",
      color: "bg-slate-100 text-slate-600"
    }
  ];

  // progreso(actual)
  const currentStep = 1.4;
  const percentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  const completedStep = Math.floor(currentStep); 

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipo espceializado por medio de chatbots y Acompañamiento mediatico, para el bienestar digital, dentro y fuera de las redes sociales.
          </p>
        </div>
        <div className="flex justify-between items-start w-full relative mb-10">
          {steps.map((step, index) => {
            const isCompleted = index < completedStep;
            const isCurrent = index === completedStep;
            return (
              <div key={index} className="w-1/4 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-md transition-all duration-300
                  ${isCompleted ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white' : step.color}
                  ${isCurrent ? 'scale-110 ' : ''}`}> {/*ring-4 ring-slate-300*/}
                  <step.icon size={26} />
                </div>
                <h3 className="text-base font-semibold text-slate-800">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2 px-2">{step.description}</p>
              </div>
            );
          })}
        </div>
        <div className="relative w-full h-4 mb-16">
          <div className="absolute top-0 left-0 w-full h-4 bg-gray-200 rounded-full z-0" />
          <div
            className="absolute top-0 left-0 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full z-10 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para formar parte de una comunidad libre?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            No necesitas tener las respuestas. Solo la voluntad de entenderte mejor.
          </p>
    
          {/*<button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Ayúdanos a Conocerte 
          </button>*/}
          <a href="https://www.webconsultas.com/mente-y-emociones/test-de-psicologia/test-eres-adicto-internet-11690" target="_blank"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
           Diagnostico
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
