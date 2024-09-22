import Image from "next/image";
import Logo from '../../public/logo.png';


export default function NavbarComponent() {
  return (
    <div className="w-[420px] flex items-center py-4">
      <Image src={Logo} alt="hometribe logo" width={130} />
    </div>
  )
}

