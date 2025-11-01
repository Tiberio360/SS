import { useState } from "react";

const Forms = () => {
  const [nombre, setNombre] = useState("");
  const [calificacion, setCalificacion] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Calificación:", calificacion);
    alert(`Enviado: ${nombre} - Calificación: ${calificacion}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
            Nombre:
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            </label>
        </div>

        <div>
            <label>
            Calificación:
            <select
                value={calificacion}
                onChange={(e) => setCalificacion(Number(e.target.value))}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            </label>
        </div>

        <button type="submit">Enviar</button>
    </form>
  );
};

export default Forms;
