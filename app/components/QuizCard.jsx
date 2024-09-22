'use client'
import { Button, Card, CardBody, Modal, ModalBody, useDisclosure, ModalContent, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import Logo from "../../public/logo.png"
import Image from "next/image";
import { SubscriptionComponent } from "../page";


const questions = [
  'I like that homeschooling gives me the freedom to set my own schedule for my child\'s learning, without being tied to school hours or rigid routines.',
  'I like that my child can learn at their own pace and explore subjects that excite them, without the pressure from standardised testing or strict curriculums.',
  'I like that homeschooling can happen anytime, anywhere - whether at home, during a trip, or while exploring nature.',
  'I like that homeschooling doesn\’t have to be perfect or formal - it can adapt to what works best for my family.',
  'I like that I don\’t have to personally teach every subject to my child - there are countless online courses, apps, and resources available, many of them free or low-cost.'
]

const results = {
  1: {
    title: 'Homeschool Hero',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt odit illo excepturi illum officiis optio, consequuntur dolor facilis aliquid expedita earum facere saepe dignissimos!"
  },
  2: {
    title: 'Homeschool Curious',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, adipisci. Sapiente distinctio rem quod quas eaque quis suscipit iusto fugiat magni, perferendis non omnis laboriosam!"
  },
  3: {
    title: "Homeschool Explorer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, adipisci. Sapiente distinctio rem quod quas eaque quis suscipit iusto fugiat magni, perferendis non omnis laboriosam!"
  }
}

function generateResult(score) {
  if (score >= 4) {
    return (
      <div className="flex flex-col justify-center items-start gap-2 px-6">
        <p className="font-semibold text-xl self-center">{results[1].title}</p>
        <p className="my-1">{results[1].description}</p>
        <p className="text-sm mt-3">Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!</p>
        <SubscriptionComponent />
      </div>
    )
  } else if (score >= 2) {
    return (
      <div className="flex flex-col justify-center items-start gap-2 px-6">
        <p>{results[2].title}</p>
        <p>{results[2].description}</p>
        <p className="text-sm">Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!</p>
        <SubscriptionComponent />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-start gap-2 px-6">
        <p>{results[3].title}</p>
        <p>{results[3].description}</p>
        <p className="text-sm">Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!</p>
        <SubscriptionComponent />
      </div>
    )
  }
}

const QuestionComponent = ({onClose}) => {
  const [pageNo, setPageNo] = useState(0);
  const [score, setScore] = useState(0)
  const bool = pageNo >= questions.length

  const resetForm = () => {
    setPageNo(0);
    onClose()
  }

  const ButtonHandler = () => {
    bool ? resetForm() : setPageNo(pageNo + 1);
  }

  return (
    <Card className="flex flex-col justify-center items-center my-20 gap-4 bg-red-100">
      <CardBody className="flex flex-col justify-center items-center py-6">
        {!bool &&
          <div className="flex flex-col justify-center items-start gap-2 px-6">
            <p className="font-semibold text-lg text-red-600">Question {pageNo + 1}</p>
            <p className=" w-full h-28">{questions[pageNo]}</p>
            <div className="flex gap-6 w-full justify-center">
              <Button 
                radius='sm' 
                color="primary" 
                className="bg-red-500 w-1/3" 
                onPress={() => {
                  ButtonHandler()
                }}
              >Disagree</Button>
              <Button 
                radius='sm' 
                color="primary" 
                className="bg-blue-500 w-1/3" 
                onPress={() => {
                  ButtonHandler()
                  setScore(score + 1)
                }}
              >Agree</Button>
            </div>
          </div>
        }
        {bool && 
          generateResult(score)
        }
      </CardBody>
    </Card>
  )
}


function QuizModal({isOpen, onOpenChange}) {


  return (
    <Modal 
      isOpen={isOpen} 
      placement='center'
      onOpenChange={onOpenChange} 
      size="full"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-start bg-stone-50">
              <Image src={Logo} width={130} alt="logo" className="pl-2 pt-2"/>
            </ModalHeader>
            <ModalBody className="bg-stone-50">
              <QuestionComponent onClose={onClose}/>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default function QuizCard({}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <Card className="bg-stone-50">
      <CardBody className="">
        <div className="gap-1 flex flex-col mx-4">
          <h2 className="text-lg font-semibold text-red-600">Wondering if homeschooling is the right fit for your family?</h2>
          <p className="font-light">Take our quick, insightful quiz to find out!</p>
          <Button onPress={onOpen} className="bg-red-600 text-white mt-4 flex w-1/3 self-center">
            Start
          </Button>
          <QuizModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      </CardBody>
    </Card>
  )
}