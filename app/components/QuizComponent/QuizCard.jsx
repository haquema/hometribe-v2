'use client'
import { Button, Card, CardBody, Modal, ModalBody, useDisclosure, ModalContent, ModalHeader } from "@nextui-org/react";
import QuizModal from "./QuizModal";

export default function QuizCard({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <Card className="bg-red-100">
      <CardBody className="">
        <div className="gap-1 flex flex-col mx-4">
          <h2 className="text-lg font-semibold text-black">Wondering if homeschooling is the right fit for your family?</h2>
          <p className="font-light">Take our quiz and find out!</p>
          <Button onPress={onOpen} className="bg-red-600 text-white mt-4 flex w-1/3 self-center">
            Start
          </Button>
          <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      </CardBody>
    </Card>
  )
}