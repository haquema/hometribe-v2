'use client'
import { Button, Card, CardBody, useDisclosure} from "@nextui-org/react";
import QuizModal from "./QuizModal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function QuizCard({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div>
      <Button onPress={onOpen} className="bg-red-600 text-white text-lg mt-4 mb-2 flex w-full h-20 self-center rounded-md animate-bounce">
        Try our quiz to find out if homeschooling is for you!<ArrowRightIcon className="size-6" />
      </Button>
      <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </div>
  )
}