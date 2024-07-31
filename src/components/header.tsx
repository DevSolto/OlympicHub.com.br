import Image from "next/image";
import logo from "../../public/logo.svg"
export function Header(){
  return(
    <header className="flex items-center justify-center">
      <Image alt="Logo do OlympicHub" src={logo} className="w-4/6"/>
    </header>
  )
}