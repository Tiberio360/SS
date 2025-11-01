import { useState } from "react";

const Forms = () => {
  const preguntas = [
    {
      seccion: "🧠 1. Estado emocional y redes",
      items: [
        "¿Te comparas con otras personas cuando ves sus publicaciones en redes?",
        "¿Sientes tristeza o ansiedad después de pasar tiempo en redes sociales?",
        "¿Tu estado de ánimo depende de los likes, comentarios o visualizaciones que recibes?",
        "¿Has sentido presión por mostrar una vida “perfecta” en redes sociales?"
      ]
    },
    {
      seccion: "💬 2. Autoestima y percepción personal",
      items: [
        "¿Crees que las redes sociales afectan cómo te ves a ti mismo/a?",
        "¿Has sentido que vales menos al compararte con influencers o amigos en redes?",
        "¿Te preocupa mucho cómo te ves en fotos o historias antes de publicarlas?",
        "¿Publicas contenido solo para sentirte aceptado/a o aprobado/a por otros?"
      ]
    },
    {
      seccion: "😴 3. Uso y hábitos digitales",
      items: [
        "¿Usas redes sociales justo antes de dormir o al despertar?",
        "¿Sientes ansiedad o incomodidad si pasas tiempo sin revisar tus redes?",
        "¿Has intentado reducir tu tiempo en redes y no lo has logrado?",
        "¿Sientes que las redes te distraen de tus tareas o estudios?"
      ]
    },
    {
      seccion: "❤️ 4. Relaciones y bienestar",
      items: [
        "¿Sientes que las redes te ayudan a conectar con tus amigos o te hacen sentir más solo/a?",
        "¿Has tenido discusiones o conflictos debido a publicaciones o mensajes en redes?",
        "¿Sientes envidia o frustración al ver la vida de otros en redes sociales?",
        "¿Te comparas con la felicidad o éxito que otros muestran en redes?"
      ]
    },
    {
      seccion: "🌱 5. Impacto general y reflexión",
      items: [
        "¿Crees que las redes sociales influyen más positivamente que negativamente en tu vida?",
        "¿Sientes que pasas demasiado tiempo en redes sociales?",
        "¿Has sentido que las redes afectan tu autoestima o bienestar emocional?",
        "¿Te gustaría aprender a usar las redes sociales de manera más saludable?"
      ]
    }
  ];

  const [respuestas, setRespuestas] = useState({});

  const handleChange = (pregunta, value) => {
    setRespuestas({
      ...respuestas,
      [pregunta]: Number(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(respuestas);
  };

  return (
    <form onSubmit={handleSubmit}>
      {preguntas.map((seccion, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <h3>{seccion.seccion}</h3>
          {seccion.items.map((pregunta, i) => (
            <div key={i} style={{ margin: "5px 0" }}>
              <label>
                {pregunta}
                <select
                  value={respuestas[pregunta] || 1}
                  onChange={(e) => handleChange(pregunta, e.target.value)}
                  style={{ marginLeft: "10px" }}
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
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Forms;
