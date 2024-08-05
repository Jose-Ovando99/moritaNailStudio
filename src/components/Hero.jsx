import { useEffect, useState } from "react";
import img1 from "../assets/moritaCover.jpg";
import img2 from "../assets/pr1.png";
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
      <div className="relative overflow-hidden w-full h-72">
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
      <div className="px-8">
        <p className="text-center text-2xl font-raleway font-bold">Morita Nail Studio</p>
        <p className="font-raleway text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit totam blanditiis iste exercitationem temporibus minus natus dignissimos aliquam minima eveniet sint nam repellat, perspiciatis, non dicta magnam. Quas, distinctio esse?</p>
      </div>
    </div>
  );
}

export default Hero;