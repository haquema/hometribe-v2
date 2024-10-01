// 'use client'
// import { Image } from "@nextui-org/react"
import Image from "next/image";
import photo1 from '../../public/photo1.jpg';
import photo2 from '../../public/photo2.jpeg';
import photo3 from '../../public/photo3.png';
import photo4 from '../../public/photo4.png';

export default function Collage() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-96 grid-flow-col">
      <div className="row-span-2 col-span-1">
        <Image src={photo1} alt="stock photo" className="object-cover h-full rounded-lg"/>
      </div>
      <div className="row-span-1 col-span-2 ">
        <Image src={photo2} alt="stock photo" className="h-full object-cover rounded-lg"/>
      </div>
      <div className="row-span-1 col-span-2 ">
        <Image src={photo3} alt="stock photo" className="h-full object-cover rounded-lg"/>
      </div>
      <div className="row-span-1 col-span-1">
      <Image src={photo4} alt="stock photo" className="h-full object-cover rounded-lg"/>
      </div>
      <div className="row-span-2 col-span-1">
      <Image src={photo1} alt="stock photo" className="h-full object-cover rounded-lg"/>
      </div>
    </div>
  )
}