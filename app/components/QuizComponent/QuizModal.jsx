import { Modal, ModalContent, ModalBody } from "@nextui-org/react"
import QuestionCard from "./QuestionCard"

export default function QuizModal({isOpen, onOpenChange}) {

  return (
    <Modal 
      isOpen={isOpen} 
      placement='center'
      backdrop="blur"
      onOpenChange={onOpenChange} 
      size="md"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="bg-stone-50 flex flex-col items-center">
              <QuestionCard onClose={onClose}/>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}