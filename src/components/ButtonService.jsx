import { textos } from "../constants/texts"

function ButtonService({ service, handleClick }) {
  const serviceName = textos[service]["servicio"];


  return (
    <button className="font-bold text-zinc-50 w-32 bg-[#0e172c] rounded-2xl m-1 leading-4 h-14 focus:text-[#0e172c] focus:bg-zinc-50 transition-all duration-300"
    onClick={() => handleClick(service)}
    >{serviceName}</button>
  )

};

export default ButtonService;