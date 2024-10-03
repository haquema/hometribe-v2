// 'use client'
// import { Image } from "@nextui-org/react"
import Image from "next/image";
import photo1 from '../../public/stock1.jpeg';
import photo2 from '../../public/stock2.jpeg';
import photo3 from '../../public/stock3.jpeg';
import photo4 from '../../public/stock4.jpeg';

export default function Gallery() {
  return (
    <div className="grid grid-rows-2 gap-4">
      <Image className="h-32 object-cover rounded-lg col-span-2 row-span-1" src={photo1} alt="" />
      <Image className="h-32 object-cover rounded-lg" src={photo2} alt="" />
      <Image className="h-32 object-cover rounded-lg" src={photo4} alt="" />    
      <Image className="h-32 object-cover rounded-lg col-span-2 row-span-1" src={photo3} alt="" />
    </div>

  )
}