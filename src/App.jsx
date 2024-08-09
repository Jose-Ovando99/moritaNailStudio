import { React } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MoreInfo from "./components/MoreInfo";
import { IconBrandWhatsapp } from "@tabler/icons-react";


function App() {

  return (
    <section className="bg-zinc-50 font-raleway">
      <header className='flex justify-center items-center w-full'>
        {/* Image by MoritaLogo */}
        <p className="text-slate-100 text-2xl font-bold font-raleway bg-pink-400 text-center w-full">Morita Nail Studio</p>
      </header>
      <Hero />
      <MoreInfo />
      <Services />
      <div className="w-full py-8 bg-[#faeee7]">
        <p className="px-8 text-center">Descubre mis creaciones más recientes y sumérgete en el arte de las uñas. Desde elegantes diseños clásicos hasta atrevidas tendencias, cada trabajo refleja mi pasión y dedicación.<br />¡Inspírate y encuentra el estilo perfecto para ti!
        </p>
      </div>
      <Gallery />
      <a className="text-center flex flex-row text-xl justify-center items-center my-16" href="http://wa.me/529221057349" target="_Blank">
        <div className="flex flex-row rounded-full py-2 bg-[#1e5950] text-zinc-50 px-4">
          <IconBrandWhatsapp size={30} color={"#25d366"} />
          <p>Agendar Cita</p>
        </div>
      </a>
      <Footer />
    </section>
  )
}

export default App
