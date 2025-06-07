import React, { useState } from "react";

function PatrocinanteEspacio({ numero }) {
  const [logo, setLogo] = useState(null);

  function handleLogoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setLogo(event.target.result);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-48 border-2 border-dashed border-indigo-400 relative">
      {logo ? (
        <img src={logo} alt={`Logo patrocinante ${numero}`} className="w-32 h-32 object-contain mb-4 rounded-xl" />
      ) : (
        <span className="text-indigo-600 text-xl font-bold mb-2">¡Aquí tu marca!</span>
      )}
      <span className="text-gray-500">Espacio premium para patrocinantes #{numero}</span>
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoChange}
        className="mt-4"
        id={`logo-input-${numero}`}
        style={{ display: "none" }}
      />
      <label htmlFor={`logo-input-${numero}`}>
        <button
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow cursor-pointer"
          type="button"
        >
          {logo ? "Cambiar logo" : "Subir logo"}
        </button>
      </label>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* ... HEADER y BANNER ... */}
      
      {/* ESPACIO PARA ANUNCIANTES/PATROCINANTES */}
      <section id="patrocina" className="my-12 mx-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <PatrocinanteEspacio numero={1} />
        <PatrocinanteEspacio numero={2} />
        <PatrocinanteEspacio numero={3} />
        <PatrocinanteEspacio numero={4} />
      </section>
      
      {/* ... resto de tu página ... */}
    </div>
  );
}
