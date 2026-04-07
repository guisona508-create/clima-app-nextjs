"use client"; // Obrigatorio para usar useState e eventos de clique

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    // 1. Validar se o input não está vazio
    if (!city.trim()) {
      alert("Digite uma cidade!");
      return;
    }

    try {
      // 2. Fazer o fetch na API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b544fea7f1c3b2408e550d153d1ccef&units=metric&lang=pt_br`,
      );

      if (!response.ok) {
        throw new Error("Cidade não encontrada");
      }

      const data = await response.json();

      // 3. Dar um console.log no resultado
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao buscar:", error.message);
      } else {
        console.error("Erro desconhecido ao buscar clima");
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8">Clima Agora</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite a cidade..."
          className="p-2 border rounded-md text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
    </main>
  );
}
