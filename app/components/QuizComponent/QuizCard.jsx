'use client'
import { Button, Card, CardBody, useDisclosure} from "@nextui-org/react";
import QuizModal from "./QuizModal";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function QuizCard({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <Card className="bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl self-center rounded-xl border border-blue-200">
      <CardBody className="p-6">
        <div className="gap-4 flex flex-col mx-4">
          <div className="space-y-2">
            <h2 className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Is homeschooling right for you?
            </h2>
            <p className="text-center text-gray-600 text-lg">
              Try our quick quiz designed to help you understand if homeschooling could be an option for your family.
            </p>
          </div>
          <Button 
            onPress={onOpen} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-2 py-6 flex w-1/2 self-center rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            endContent={<ArrowRightIcon className="size-5" />}
          >
            Take Quiz
          </Button>
          <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      </CardBody>
    </Card>
  )
}