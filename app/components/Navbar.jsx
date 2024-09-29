import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png';


export default function NavbarComponent() {
  return (
    <div className="flex p-4 w-full max-w-[600px] self-center">
      <Link href="/">
        <Image src={Logo} alt="hometribe logo" width={130} />
      </Link>
    </div>
  )
}

