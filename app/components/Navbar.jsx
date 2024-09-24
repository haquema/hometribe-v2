import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png';


export default function NavbarComponent() {
  return (
    <div className="w-[420px] flex items-center py-4 px-2">
      <Link href="/">
        <Image src={Logo} alt="hometribe logo" width={130} />
      </Link>
    </div>
  )
}

