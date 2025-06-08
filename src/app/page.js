"use client";
import { useRef, useState, useEffect } from "react";

function EspacioPatrocinante({ numero, color = "indigo" }) {
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);
  const storageKey = `logo_patrocinante_${numero}`;

  useEffect(() => {
    const savedLogo = localStorage.getItem(storageKey);
    if (savedLogo) setLogo(savedLogo);
  }, [storageKey]);

  function handleLogoChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogo(event.target.result);
      localStorage.setItem(storageKey, event.target.result);
    };
    reader.readAsDataURL(file);
  }

  function handleButtonClick() {
    fileInputRef.current.click();
  }

  const estilos = {
    indigo: {
      border: "border-indigo-400",
      text: "text-indigo-600",
      bg: "bg-indigo-600",
      hover: "hover:bg-indigo-700"
    },
    purple: {
      border: "border-purple-400",
      text: "text-purple-600",
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700"
    },
    pink: {
      border: "border-pink-400",
      text: "text-pink-600",
      bg: "bg-pink-600",
      hover: "hover:bg-pink-700"
    },
    green: {
      border: "border-green-400",
      text: "text-green-600",
      bg: "bg-green-600",
      hover: "hover:bg-green-700"
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-48 border-2 border-dashed ${estilos[color].border}`}>
      {logo ? (
        <img src={logo} alt={`Logo patrocinante ${numero}`} className="w-48 h-48 object-contain mb-4 rounded-xl" />
      ) : (
        <span className={`${estilos[color].text} text-xl font-bold mb-2`}>¡Aquí tu marca!</span>
      )}
      <span className="text-gray-500">Espacio premium para patrocinantes #{numero}</span>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleLogoChange}
        style={{ display: "none" }}
      />
      <button
        className={`mt-4 ${estilos[color].bg} ${estilos[color].hover} text-white px-4 py-2 rounded-lg shadow cursor-pointer`}
        type="button"
        onClick={handleButtonClick}
      >
        {logo ? "Cambiar logo" : "Subir logo"}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <div className="text-2xl font-bold text-indigo-700">Plataforma Transformacional</div>
        <nav className="space-x-6">
          <a href="#cursos" className="hover:text-indigo-500 font-medium">Cursos</a>
          <a href="#seminarios" className="hover:text-indigo-500 font-medium">Seminarios</a>
          <a href="#en-vivo" className="hover:text-indigo-500 font-medium">En Vivo</a>
          <a href="#patrocina" className="hover:text-indigo-500 font-medium">Patrocina</a>
        </nav>
        <button className="bg-indigo-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-indigo-700 shadow-md">
          Ingresar
        </button>
      </header>

      {/* BANNER PRINCIPAL */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 px-8 mt-2 rounded-3xl shadow-lg mx-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">¡Revoluciona tu vida con contenido transformacional!</h1>
          <p className="text-xl mb-6 max-w-xl">
            Cursos, seminarios y transmisiones en vivo para tu crecimiento personal, profesional y espiritual. ¡Próximamente!
          </p>
          <a href="#patrocina" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-100">
            Reserva tu espacio como patrocinante
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Transformación" className="rounded-2xl shadow-xl w-72 md:w-96"/>
        </div>
      </section>

      {/* ESPACIOS PARA ANUNCIANTES/PATROCINANTES */}
      <section id="patrocina" className="my-12 mx-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <EspacioPatrocinante numero={1} color="indigo" />
        <EspacioPatrocinante numero={2} color="purple" />
        <EspacioPatrocinante numero={3} color="pink" />
        <EspacioPatrocinante numero={4} color="green" />
      </section>

      {/* SECCIONES DE CONTENIDO */}
      <section id="cursos" className="mx-4 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Cursos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-500 border-2 border-dashed border-gray-400">
            Próximamente
          </div>
          <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-500 border-2 border-dashed border-gray-400">
            Próximamente
          </div>
          <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-500 border-2 border-dashed border-gray-400">
            Próximamente
          </div>
        </div>
      </section>
      <section id="seminarios" className="mx-4 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Seminarios y Capacitaciones</h2>
        <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-500 border-2 border-dashed border-gray-400">
          Próximamente
        </div>
      </section>
      <section id="en-vivo" className="mx-4 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-pink-700">Streaming en Vivo</h2>
        <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-500 border-2 border-dashed border-gray-400">
          Próximamente
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-indigo-950 text-white py-8 text-center rounded-t-3xl shadow-lg">
        <div className="mb-2">© {new Date().getFullYear()} Plataforma Transformacional</div>
        <div>
          Síguenos:
          <a href="#" className="ml-2 underline hover:text-indigo-300">Instagram</a>
          <a href="#" className="ml-2 underline hover:text-indigo-300">LinkedIn</a>
          <a href="#" className="ml-2 underline hover:text-indigo-300">Contacto</a>
        </div>
        <div className="mt-2">
          ¿Quieres recibir noticias del lanzamiento?
          <input type="email" placeholder="Tu correo" className="ml-2 px-3 py-1 rounded-md text-gray-900" />
          <button className="ml-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-md">Suscribirme</button>
        </div>
      </footer>
    </div>
  );
}
