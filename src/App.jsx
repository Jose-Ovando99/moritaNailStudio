import { React } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App() {

  return (
    <section className="bg-zinc-50">
      <header className='flex justify-center items-center w-full'>
        {/* Image by MoritaLogo */}
        <p className="text-slate-100 text-2xl font-bold font-raleway bg-pink-400 text-center w-full">Morita Nail Studio</p>
      </header>
      <Hero />
      <Services />

      <p className="mt-16 text-slate-700">Portfolio gallery (carrusel)</p>
      <p className="text-slate-700">Whatsapp, footer and social media</p>
    </section>
  )
}

export default App
