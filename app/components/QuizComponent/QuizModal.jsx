import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react"
import QuestionCard from "./QuestionCard"

export default function QuizModal({isOpen, onOpenChange}) {

  return (
    <Modal 
      isOpen={isOpen} 
      placement='center'
      backdrop="blur"
      onOpenChange={onOpenChange} 
      size="3xl"
      classNames={{
        body: 'bg-stone-50 flex flex-col justify-center items-center',
        base: 'min-h-[32rem] max-h-[90vh] overflow-y-auto',
        header: 'border-b border-gray-200 bg-stone-50'
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Is homeschooling right for you?
              </h2>
            </ModalHeader>
            <ModalBody>
              <QuestionCard onClose={onClose}/>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}