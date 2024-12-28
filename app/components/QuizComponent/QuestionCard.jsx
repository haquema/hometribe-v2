import { useState } from "react";
import ResultCard from "./ResultCard";
import { Button, Progress } from "@nextui-org/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const QuestionCard = ({ onClose }) => {
  const [pageNo, setPageNo] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showIntro, setShowIntro] = useState(true); // Intro screen toggle

  const questionCount = questions.length;
  let progressValue = questionCount ? (pageNo / questionCount) * 100 : 0;

  const quizCompleted = pageNo === questions.length;
  const resultPage = pageNo > questions.length;

  const resetForm = () => {
    setPageNo(0);
    setAnswers([]);
    setShowIntro(true); // Reset to intro screen
    onClose();
  };

  const backButton = () => {
    setPageNo(pageNo - 1);
    setAnswers(answers.slice(0, -1));
  };

  const ButtonHandler = () => {
    quizCompleted || resultPage ? resetForm() : setPageNo(pageNo + 1);
  };

  // Intro Screen JSX
  if (showIntro) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full px-6">
        <h1 className="text-2xl font-bold mb-4 text-left w-full">
          Welcome to the Homeschooling Quiz!
        </h1>
        <p className="text-lg mb-8 text-left w-full">
          This quiz will help you reflect on whether homeschooling could be the
          right fit for your family. It’s designed to address common
          misconceptions and help you explore the flexibility and opportunities
          that homeschooling can offer.
        </p>
        <Button
          color="primary"
          className="w-1/2"
          onPress={() => setShowIntro(false)} // Transition to quiz
        >
          Start Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center w-full gap-6 my-4 px-5 h-full text-black">
      {!resultPage && (
        <Progress
          value={progressValue}
          color="primary"
          label={`${pageNo}/${questionCount}`}
          className="mt-6 w-full"
          classNames={{
            labelWrapper: "self-center",
            label: "font-semibold",
          }}
        />
      )}
      {!(quizCompleted || resultPage) && (
        <div className="flex flex-col justify-between items-start h-60">
          {pageNo !== 0 && (
            <button
              className="absolute inset-y-32 left-2 hover:scale-125"
              onClick={backButton}
            >
              <ChevronLeftIcon className="size-6" />
            </button>
          )}
          <p className="w-full h-fit mt-4">{questions[pageNo]}</p>
          <div className="flex gap-6 w-full justify-center mb-6">
            <Button
              radius="sm"
              color="primary"
              className="bg-red-500 w-1/2"
              onPress={() => {
                ButtonHandler();
                setAnswers([...answers, 0]);
              }}
            >
              Disagree
            </Button>
            <Button
              radius="sm"
              color="primary"
              className="bg-blue-500 w-1/2"
              onPress={() => {
                ButtonHandler();
                setAnswers([...answers, 1]);
              }}
            >
              Agree
            </Button>
          </div>
        </div>
      )}
      {quizCompleted && (
        <div className="flex flex-col justify-between items-center gap-10 h-60">
          <p className="mt-4">
            Thanks for completing the quiz. To see your results, press the
            button below.
          </p>
          <Button
            className="w-full mb-6"
            onPress={() => setPageNo(pageNo + 1)}
          >
            Results
          </Button>
        </div>
      )}
      {resultPage && <ResultCard answers={answers} />}
    </div>
  );
};

export default QuestionCard;

const questions = [
  "I like the idea that homeschooling gives me the freedom to set my own schedule and adapt learning to suit my family’s/child’s routine.",
  "I’m excited by the fact that homeschooling can happen anytime, anywhere - whether at home, outdoors, on trips, or through real-life experiences.",
  "I understand that I don’t have to personally teach every subject - there are countless online courses, apps, and free or low-cost resources that can help.",
  "I’m open to using tools like educational videos, virtual classes, or community co-ops to support my child’s learning.",
  "I know that starting homeschooling is much easier than most people think - I don’t even need permission from my local authority (though notifying them is encouraged!).",
  "I understand that homeschooling doesn’t require a huge time commitment - many families successfully homeschool in just a few hours a day.",
  "I like that homeschooling allows me to focus on meaningful learning experiences rather than unnecessary assignments or busywork.",
  "I know homeschooling doesn’t mean isolation - there are many opportunities for social activities like homeschool groups/co-ops, sports, and extracurriculars.",
  "I’m excited about joining local or online homeschooling communities to find support, advice, and opportunities for my child.",
];