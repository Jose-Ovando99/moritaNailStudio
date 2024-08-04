import { useState } from "react";
import ButtonService from "./ButtonService";
import { textos } from "../constants/texts"



function Services() {
  const [serviceDes, setServiceDes] = useState('manicuraSpa');
  
  let servicioName = textos[serviceDes]["servicio"];
  let servicioDes = textos[serviceDes]["descripcion"];
  let servicioPrecio = textos[serviceDes]["precio"];

  const actualizarServicio = (serviceSelect) => {
    setServiceDes(serviceSelect);
  };


  return (
    <div>
      <div className="flex flex-row flex-wrap mt-4 justify-center">
        <ButtonService service={"manicuraCombinada"} handleClick={actualizarServicio}/>
        <ButtonService service={"manicuraSpa"} handleClick={actualizarServicio}/>
        <ButtonService service={"gelSemipermanente"} handleClick={actualizarServicio} />
        <ButtonService service={"nivelacion"} handleClick={actualizarServicio} />
        <ButtonService service={"banioAcrilico"} handleClick={actualizarServicio} />
        <ButtonService service={"uniasAcrilicas"} handleClick={actualizarServicio} />
        <ButtonService service={"uniasSoftGel"} handleClick={actualizarServicio} />
        <ButtonService service={"esmaltadoPies"} handleClick={actualizarServicio} />
        <ButtonService service={"pedicuraSeco"} handleClick={actualizarServicio} />
        <ButtonService service={"pedicuraSpa"} handleClick={actualizarServicio} />
        <ButtonService service={"pedicuraAdvance"} handleClick={actualizarServicio} />
      </div>
      <section>
        <p className="text-red-500">{servicioName}</p>
        <p className="text-red-500">{servicioDes}</p>
        <p className="text-red-500">{servicioPrecio}</p>
      </section>
    </div>
  )
}

export default Services;