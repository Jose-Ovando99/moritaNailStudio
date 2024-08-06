import { useState, useMemo } from "react";
import ButtonService from "./ButtonService";
import { textos as serviciosOfrecidos } from "../constants/texts";
import { IconHeartFilled } from "@tabler/icons-react";
// importacion de prueba
import imagenPrueba from "../assets/moritaCover.jpg";

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
    <div>
      <div className="flex flex-row flex-wrap mt-4 justify-center">
        {Object.keys(serviciosOfrecidos).map((service) => (
          <ButtonService
            key={service}
            service={service}
            handleClick={actualizarServicio}
          />
        ))}
      </div>
      <section className="bg-pink-300 p-5 flex flex-col items-center justify-center font-raleway  text-slate-900">
        <p className="text-3xl font-bold">{servicio}</p>
        <img src={imagenPrueba} className="w-72" />
        <p className="text-justify my-4 ">{descripcion}</p>
        <div className="flex flex-row border-2 rounded-full p-2 bg-purple-700 border-purple-700 text-slate-200">
          <IconHeartFilled />
          <p>{precio}</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
