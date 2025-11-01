import { useState } from "react";

const Forms = () => {
  const preguntas = [
    {
      seccion: "🧠 1. Estado emocional y redes",
      items: [
        "¿Te comparas con otras personas cuando ves sus publicaciones en redes?",
        "¿Sientes tristeza o ansiedad después de pasar tiempo en redes sociales?",
        "¿Has sentido presión por mostrar una vida “perfecta” en redes sociales?"
      ]
    },
    {
      seccion: "💬 2. Autoestima y percepción personal",
      items: [
        "¿Crees que las redes sociales afectan cómo te ves a ti mismo/a?",
        "¿Te preocupa mucho cómo te ves en fotos o historias antes de publicarlas?",
        "¿Publicas contenido solo para sentirte aceptado/a o aprobado/a por otros?"
      ]
    },
    {
      seccion: "😴 3. Uso y hábitos digitales",
      items: [
        "¿Usas redes sociales justo antes de dormir o al despertar?",
        "¿Sientes ansiedad o incomodidad si pasas tiempo sin revisar tus redes?",
        "¿Has intentado reducir tu tiempo en redes y no lo has logrado?"
      ]
    },
    {
      seccion: "❤️ 4. Relaciones y bienestar",
      items: [
        "¿Sientes que las redes te ayudan a conectar con tus amigos o te hacen sentir más solo/a?",
        "¿Has tenido discusiones o conflictos debido a publicaciones o mensajes en redes?",
        "¿Te comparas con la felicidad o éxito que otros muestran en redes?"
      ]
    },
    {
      seccion: "🌱 5. Impacto general y reflexión",
      items: [
        "¿Crees que las redes sociales influyen más positivamente que negativamente en tu vida?",
        "¿Has sentido que las redes afectan tu autoestima o bienestar emocional?",
        "¿Te gustaría aprender a usar las redes sociales de manera más saludable?"
      ]
    }
  ];

  const [respuestas, setRespuestas] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (pregunta, value) => {
    setRespuestas({
      ...respuestas,
      [pregunta]: Number(value)
    });
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, preguntas.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    const valores = Object.values(respuestas).map(Number);
    if (valores.length === 0) {
      alert("Por favor, responde al menos una pregunta.");
      return;
    }

    const promedio = valores.reduce((a, b) => a + b, 0) / valores.length;

    let resultado = "";
    if (promedio <= 2.5) {
      resultado = "Uso equilibrado de redes sociales";
    } else if (promedio <= 3.5) {
      resultado = "Posibles señales de estrés digital o comparación social";
    } else if (promedio <= 4.5) {
      resultado = "Alto impacto emocional, posible dependencia o baja autoestima relacionada con redes";
    } else {
      resultado = "Riesgo alto, se recomienda acompañamiento psicológico o intervención educativa";
    }

    alert(`Resultado orientativo (solo para interpretación interna)\n\nPromedio: ${promedio.toFixed(2)}\n${resultado}`);
  };

  const progreso = ((currentStep + 1) / preguntas.length) * 100;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <div className="mb-4 h-2 w-full bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progreso}%` }}
        ></div>
      </div>

      {preguntas.map((seccion, idx) => (
        <div
          key={idx}
          className={`transition-opacity duration-500 ${
            idx === currentStep ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">{seccion.seccion}</h3>
          {seccion.items.map((pregunta, i) => (
            <div key={i} className="mb-3">
              <label className="block">
                {pregunta}
                <select
                  value={respuestas[pregunta] || 1}
                  onChange={(e) => handleChange(pregunta, e.target.value)}
                  className="ml-2 border rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
                Anterior
              </button>
            )}
            {currentStep < preguntas.length - 1 ? (
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                Siguiente
              </button>
            ) : (
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Enviar
              </button>
            )}
          </div>
        </div>
      ))}
    </form>
  );
};

export default Forms;
