'use client'
import { useEffect, useState } from "react";
import { Button, Card, CardBody, useDisclosure, Dialog} from "@nextui-org/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import QuizModal from "./QuizModal";


export default function QuizBubble({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1000); //
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  
  return (
    <>
      {showBubble && (
        <div className="chat chat-end hover:cursor-pointer absolute top-0" onClick={onOpen}>
          <div className={`chat-bubble bg-red-200 text-black text-sm fixed top-10 right-5 ${showBubble ? 'animate-slideIn' : 'translate-x-full'}`}>
            <Button onPress={() => setShowBubble(false)} isIconOnly className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 rounded-full bg-red-500 text-white min-w-fit h-fit w-fit p-1"><XMarkIcon className="size-4" /></Button>
            <p className="">Not sure about homeschooling?<br/>Take our quiz!</p>
          </div>
          <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      )}
    </>
  )
}