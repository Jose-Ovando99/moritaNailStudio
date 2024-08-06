import { textos } from "../constants/texts"

function ButtonService({ service, handleClick }) {
  const serviceName = textos[service]["servicio"];


  return (
    <button className="font-raleway font-bold text-zinc-50 w-32 bg-purple-400 rounded-2xl m-1 leading-4 h-14 focus:text-purple-400 focus:bg-zinc-200 transition-all duration-300"
    onClick={() => handleClick(service)}
    >{serviceName}</button>
  )

};

export default ButtonService;