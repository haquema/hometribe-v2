'use client'
import { Button, Card, CardBody, useDisclosure} from "@nextui-org/react";
import QuizModal from "./QuizModal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function QuizCard({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <Card className="bg-red-200 self-center rounded-lg">
      <CardBody className="">
        <div className="gap-1 flex flex-col mx-4">
          <h2 className="text-lg text-center font-semibold text-black">Try out our quiz and find out what kind of homeschooler you are!</h2>
          <Button onPress={onOpen} className="bg-black text-white mt-4 flex w-1/3 self-center rounded-md">
            <ArrowRightIcon className="size-6" />
          </Button>
          <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      </CardBody>
    </Card>
  )
}