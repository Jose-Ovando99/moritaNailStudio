import { textos } from "../constants/texts"

function ButtonService({ service, handleClick }) {
  const serviceName = textos[service]["servicio"];


  return (
    <button className="font-bold text-[#33272a] w-32 bg-[#ff8ba7] rounded-2xl m-1 leading-4 h-14 focus:text-[#ff8ba7] focus:bg-[#33272a] transition-all duration-300"
    onClick={() => handleClick(service)}
    >{serviceName}</button>
  )

};

export default ButtonService;