import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png';
import { Button } from "@nextui-org/react";


export default function NavbarComponent() {
  return (
    <div className="flex p-4 w-full items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="hometribe logo" width={130} />
      </Link>
      <Link href={'/login'}><Button size="sm" className="rounded-xl">Login</Button></Link>
    </div>
  )
}

