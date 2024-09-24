import { useState } from "react";
import ResultCard from "./ResultCard";
import { Button, Progress } from "@nextui-org/react";

const QuestionCard = ({onClose}) => {
  const [pageNo, setPageNo] = useState(0);
  const questionCount = questions.length;
  let progressValue = (pageNo/questionCount) * 100;
  const [score, setScore] = useState(0)
  const quizCompleted = (pageNo == questions.length)
  const resultPage = (pageNo > questions.length)

  const resetForm = () => {
    setPageNo(0);
    onClose()
  }

  const ButtonHandler = () => {
    (quizCompleted || resultPage) ? resetForm() : setPageNo(pageNo + 1);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-10 gap-6">
      {!resultPage && 
        <Progress value={progressValue} color="primary" showValueLabel={true} className="w-4/5" classNames={{
          labelWrapper: 'self-center'
        }} />
      }
      {!(quizCompleted || resultPage) &&
        <div className="flex flex-col justify-center items-start gap-2 px-4">
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
      {quizCompleted && 
        <div className="flex flex-col px-4 gap-6">
          <p>Thanks for completing the quiz. To see your results, press the button below</p>
          <Button onPress={() => setPageNo(pageNo + 1)}>Results</Button>
        </div>
      }
      {resultPage &&
        ResultCard(score)
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