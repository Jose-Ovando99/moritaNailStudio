import { React } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


function App() {

  return (
    <section className="bg-zinc-50 font-raleway">

      <header className='flex justify-center items-center w-full z-10 fixed'>
        {/* Image by MoritaLogo */}
        <p className="text-slate-100 text-2xl font-bold font-raleway bg-pink-400 text-center w-full">Morita Nail Studio</p>
      </header>
      <Hero />
      <Services />
      <div className="w-full my-4">
        <p className="px-8 text-justify">Descubre mis creaciones más recientes y sumérgete en el arte de las uñas. Desde elegantes diseños clásicos hasta atrevidas tendencias, cada trabajo refleja mi pasión y dedicación.<br />¡Inspírate y encuentra el estilo perfecto para ti!
        </p>
      </div>
      <Gallery />
      
    <Footer />
      <p className="text-slate-700">Whatsapp, footer and social media</p>
    </section>
  )
}

export default App
