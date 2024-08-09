import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok  } from "@tabler/icons-react";

function Footer() {

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center my-6">
        <p className="font-fjalla text-2xl">Redes Sociales</p>
        <div className="flex flex-row justify-between items-center gap-10 my-10">
          <a className="bg-[#3b5998] rounded-full flex justify-center items-center p-1" href="https://www.facebook.com/profile.php?id=61553247465111" target="_Blank">
            <IconBrandFacebook color={'white'} size={40} />
          </a>
          <a className="bg-[#e1306c] rounded-full flex justify-center items-center p-1" href="https://www.instagram.com/morita_nailstudio/" target="_Blank">
            <IconBrandInstagram color={'white'} size={40} />
          </a>
          <a className="bg-[#040404] rounded-full flex justify-center items-center p-1" href="https://www.tiktok.com/@morita_nailstudio" target="_Blank">
            <IconBrandTiktok color={'white'} size={40} />
          </a>         
        </div>
      </div>
      <footer className="bg-[#faeee7] p-8 text-center">
        Copyright © 2024 Morita Nail Studio - Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default Footer;