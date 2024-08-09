import { useEffect, useState } from "react";
import img1 from "../assets/moritaCover.jpg";
import img2 from "../assets/moritaStudioFront.jpg";
import img3 from "../assets/test-2.jpg";

const images = [
  img1,
  img2,
  img3
];

function Hero() {
  const [imgActual, setImgActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgActual((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative overflow-hidden w-full h-56">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${imgActual * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full h-full object-cover object-center"
            />
          ))}
        </div>
      </div>
      <div className="px-8 bg-[#faeee7] text-[#0e172c] text-justify">
        <p className="text-center text-2xl font-raleway font-bold my-4">Morita Nail Studio</p>
        <p className="font-raleway text-justify mb-4">En Morita Nail Studio, nos especializamos en manicuras y pedicuras detalladas, extensiones de uñas, decoraciones personalizadas y tratamientos de cuidado profundo. Utilizamos productos de alta calidad y técnicas avanzadas para asegurar que cada diseño no solo sea hermoso, sino también duradero y de excelente calidad.</p>
        <p>Minatitlán, Veracruz, México.</p>
      </div>
    </div>
  );
}

export default Hero;