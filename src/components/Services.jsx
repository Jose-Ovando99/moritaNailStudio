import { useState, useMemo } from "react";
import ButtonService from "./ButtonService";
import { textos as serviciosOfrecidos } from "../constants/texts";
import { IconHeartFilled } from "@tabler/icons-react";
// importacion de prueba
import imagenPrueba from "../assets/moritaStudioFront.jpg";

function Services() {
  const [serviceDes, setServiceDes] = useState('manicuraSpa');

  const { servicio, descripcion, precio } = useMemo(() => {
    const servicioData = serviciosOfrecidos[serviceDes] || {};
    return {
      servicio: servicioData.servicio,
      descripcion: servicioData.descripcion,
      precio: servicioData.precio
    };
  }, [serviceDes]);

  const actualizarServicio = (serviceSelect) => {
    setServiceDes(serviceSelect);
  };

  return (
    <div className="bg-[#fec7d7] pt-4">
      <p className="font-bold text-3xl text-center text-[#0e172c] mb-4">Servicios</p>
      <div className="flex flex-row flex-wrap justify-center pt-1 pb-5 ">
        {Object.keys(serviciosOfrecidos).map((service) => (
          <ButtonService
            key={service}
            service={service}
            handleClick={actualizarServicio}
          />
        ))}
      </div>
      <section className="bg-zinc-50 p-6 pb-10 flex flex-col items-center justify-center">
        <p className="my-2 text-3xl font-bold text-center">{servicio}</p>
        <div className="bg-[#d9d4e7] flex flex-col items-center justify-center p-6">
          <img src={imagenPrueba} className="w-72 h-72 rounded-2xl" />
          <p className="text-justify my-4 text-[#0e172c] font-semibold">{descripcion}</p>
          <div className="flex flex-row rounded-full p-2 bg-[#0e172c] text-zinc-50 shadow-md items-center">
            <IconHeartFilled color={"#CF8BA3"} />
            <p className="font-semibold mx-2">{precio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
