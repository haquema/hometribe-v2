import { useState } from "react";
import ResultCard from "./ResultCard";
import { Button, Progress } from "@nextui-org/react";

const QuestionCard = ({onClose}) => {
  const [pageNo, setPageNo] = useState(0);
  const questionCount = questions.length;
  let progressValue = (pageNo/questionCount) * 100;
  const [answers, setAnswers] = useState([])
  const quizCompleted = (pageNo == questions.length)
  const resultPage = (pageNo > questions.length)

  const resetForm = () => {
    setPageNo(0);
    onClose()
  }

  const backButton = () => {
    setPageNo(pageNo - 1);
    
  }

  const ButtonHandler = () => {
    (quizCompleted || resultPage) ? resetForm() : setPageNo(pageNo + 1);
  }

  return (
    <div className="flex flex-col justify-between items-center w-full gap-6 my-4 px-2 h-full">
      {!resultPage && 
        <Progress value={progressValue} color="primary" label={`${pageNo}/${questionCount}`} className=" mt-6 w-full" classNames={{
          labelWrapper: 'self-center',
          label: 'font-semibold'
        }} />
      }
      {!(quizCompleted || resultPage) &&
        <div className="flex flex-col justify-between items-start h-60">
          <p className=" w-full h-fit mt-4">{questions[pageNo]}</p>
          <div className="flex gap-6 w-full justify-center mb-6">
            <Button 
              radius='sm' 
              color="primary" 
              className="bg-red-500 w-1/2" 
              onPress={() => {
                ButtonHandler()
                setAnswers([...answers, 0])
                console.log(answers)
              }}
            >Disagree</Button>
            <Button 
              radius='sm' 
              color="primary" 
              className="bg-blue-500 w-1/2" 
              onPress={() => {
                ButtonHandler()
                setAnswers([...answers, 1])
                console.log(answers)
              }}
            >Agree</Button>
          </div>
        </div>
      }
      {quizCompleted && 
        <div className="flex flex-col justify-between items-center gap-10 h-60">
          <p className="mt-4">Thanks for completing the quiz. To see your results, press the button below</p>
          <Button className='w-full mb-6' onPress={() => setPageNo(pageNo + 1)}>Results</Button>
        </div>
      }
      {resultPage &&
        ResultCard(answers)
      }
    </div>
  )
}

export default QuestionCard


const questions = [
  'I like that homeschooling gives me the freedom to set my own schedule for my child\'s learning, without being tied to school hours or rigid routines.',
  'I like that my child can learn at their own pace and explore subjects that excite them, without the pressure from standardised testing or strict curriculums.',
  'I like that homeschooling can happen anytime, anywhere - whether at home, during a trip, or while exploring nature.',
  'I like that homeschooling doesn\’t have to be perfect or formal - it can adapt to what works best for my family.',
  'I like that I don\’t have to personally teach every subject to my child - there are countless online courses, apps, and resources available, many of them free or low-cost.'
]