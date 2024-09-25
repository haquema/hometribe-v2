import { Modal, ModalContent, ModalBody } from "@nextui-org/react"
import QuestionCard from "./QuestionCard"

export default function QuizModal({isOpen, onOpenChange}) {

  return (
    <Modal 
      isOpen={isOpen} 
      placement='center'
      backdrop="blur"
      onOpenChange={onOpenChange} 
      size="sm"
      classNames={{
        body: 'bg-stone-50 flex flex-col justify-center items-center',
        base: 'h-96'
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <QuestionCard onClose={onClose}/>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}