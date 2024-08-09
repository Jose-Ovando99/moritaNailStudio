import { IconNotes } from "@tabler/icons-react";
import higiene from "../assets/higieneImg.webp";
import calidad from "../assets/calidadImg.webp";
import variedad from "../assets/variedadImg.webp";

function MoreInfo() {

  return (
    <div className="flex flex-col px-8 justify-center items-center text-center py-10">
      <div className="flex flex-col justify-center items-center my-4">
        <img src={higiene} className="w-16 h-16" />
        <p className="font-bold text-lg my-1">Higiene</p>
        <p className="">Tu seguridad es nuestra prioridad. Implementamos <span className="font-semibold">rigurosos estándares de higiene y esterilización</span> para garantizarte una experiencia placentera y completamente segura.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <img src={calidad} className="w-12 h-16" />
        <p className="font-bold text-lg my-1">Calidad</p>
        <p className="">
          Cada diseño de uñas se realiza con atención al detalle, utilizando <span className="font-semibold">productos de alta calidad y técnicas avanzadas</span> para asegurar resultados duraderos y satisfactorios.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <img src={variedad} className="h-16 w-16" />
        <p className="font-bold text-lg my-1">Variedad de efectos y colores</p>
        <p className="">
          Sabemos que la variedad es esencial. Descubre nuestra <span className="font-semibold">amplia gama de colores y efectos</span>, y personaliza tus uñas según tu estilo único.
        </p>
      </div>
    </div>
  )
}

export default MoreInfo;