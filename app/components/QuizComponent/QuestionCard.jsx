import { useState } from "react";
import ResultCard from "./ResultCard";
import { Button, Progress } from "@nextui-org/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center items-center w-full h-full px-6"
      >
        <h1 className="text-2xl font-bold mb-4 text-left w-full">
          Welcome to the Homeschooling Quiz!
        </h1>
        <p className="text-lg mb-8 text-left w-full leading-relaxed">
          This quiz will help you reflect on whether homeschooling could be the
          right fit for your family.
        </p>
        <Button
          color="primary"
          size="lg"
          className="w-1/2 font-semibold shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600"
          onPress={() => setShowIntro(false)}
        >
          Start Quiz
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col justify-between items-center w-full gap-6 my-4 px-5 h-full text-black"
    >
      {!resultPage && (
        <div className="w-full space-y-2">
          <Progress
            value={progressValue}
            color="primary"
            className="mt-6 w-full"
            classNames={{
              indicator: "bg-gradient-to-r from-blue-600 to-purple-600",
              labelWrapper: "self-center",
              label: "font-semibold",
            }}
          />
          <p className="text-sm text-gray-600 text-right">
            Question {pageNo + 1} of {questionCount}
          </p>
        </div>
      )}

      {!(quizCompleted || resultPage) && (
        <motion.div 
          key={pageNo}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col justify-between items-start min-h-[240px] w-full"
        >
          {pageNo !== 0 && (
            <button
              className="absolute inset-y-32 -left-2 hover:scale-125 transition-transform p-2"
              onClick={backButton}
            >
              <ChevronLeftIcon className="size-6" />
            </button>
          )}
          <div className="space-y-2 w-full">
            <span className="text-sm font-medium text-gray-500">Question {pageNo + 1}</span>
            <p className="text-lg leading-relaxed">{questions[pageNo]}</p>
          </div>
          <div className="flex gap-6 w-full justify-center mt-8">
            <Button
              radius="sm"
              size="lg"
              className="w-1/2 bg-red-500 hover:bg-red-600 hover:scale-105 transition-all shadow-md text-white"
              onPress={() => {
                ButtonHandler();
                setAnswers([...answers, 0]);
              }}
            >
              Disagree
            </Button>
            <Button
              radius="sm"
              size="lg"
              className="w-1/2 bg-green-500 hover:bg-green-600 hover:scale-105 transition-all shadow-md text-white"
              onPress={() => {
                ButtonHandler();
                setAnswers([...answers, 1]);
              }}
            >
              Agree
            </Button>
          </div>
        </motion.div>
      )}

      {quizCompleted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-between items-center gap-10 min-h-[240px]"
        >
          <p className="text-lg text-center mt-4">
            Thanks for completing the quiz! Ready to see your results?
          </p>
          <Button
            size="lg"
            className="w-full mb-6 shadow-lg hover:scale-105 transition-transform"
            onPress={() => setPageNo(pageNo + 1)}
          >
            Show My Results
          </Button>
        </motion.div>
      )}
      
      {resultPage && <ResultCard answers={answers} />}
    </motion.div>
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