import SubscriptionForm from "../SubscriptionForm";
import { Button } from "@nextui-org/react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export default function ResultCard({ answers }) { // Destructure answers
  console.log(answers);

  // Function to calculate the score
  const tallyScore = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
      console.log(sum);
    }
    return sum;
  };

  const score = tallyScore(answers); // Use the destructured answers
  console.log(score);

  let achievedResult;
  if (score >= 6) {
    achievedResult = 1;
  } else if (score >= 3) {
    achievedResult = 2;
  } else {
    achievedResult = 3;
  }

  const getShareMessage = () => {
    const result = titles[achievedResult];
    return `🏠 I just took the Hometribe quiz and got: ${result.title}!\n\nWondering if homeschooling is right for your family? Take the quiz at: https://hometribe.education`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getShareMessage());
      toast.success("Copied to clipboard! Share with your friends!");
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {Object.entries(titles)
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .reverse()
          .map(([key, result]) => (
          <div
            key={key}
            className={`rounded-xl p-8 h-full flex flex-col ${
              parseInt(key) === achievedResult
                ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-500 shadow-lg transform scale-105'
                : 'bg-white shadow-sm hover:shadow-md transition-shadow'
            }`}
          >
            <div className="flex flex-col items-center mb-6">
              <span className="text-4xl mb-4">{result.icon}</span>
              <h3 className={`text-xl font-bold flex flex-col items-center gap-2 text-center ${
                parseInt(key) === achievedResult ? 'text-blue-700' : 'text-gray-700'
              }`}>
                <span>{result.title}</span>
                {parseInt(key) === achievedResult && (
                  <span className="text-sm font-medium text-blue-600">
                    (Your Result!)
                  </span>
                )}
              </h3>
            </div>
            <p className="text-gray-600 flex-grow">{result.description}</p>
            {parseInt(key) === achievedResult && (
              <Button
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                startContent={<ClipboardIcon className="size-4" />}
                onPress={copyToClipboard}
              >
                Share Result
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const titles = {
  3: {
    title: "Traditional Learning Preference",
    icon: "🏫",
    description: `Traditional schooling might be the better fit for your family right now. Every family's educational journey is unique, and choosing what works best for your situation is what matters most.`,
  },
  2: {
    title: "Homeschool Curious",
    icon: "🤔",
    description: `You're warming up to homeschooling but might need more information to feel confident. Remember, there's no "perfect" way to homeschool—you can start small and find what works best for your family.`,
  },
  1: {
    title: "Homeschool Ready",
    icon: "🎯",
    description: `You're ready to embrace homeschooling! You understand the flexibility it offers and feel confident about using various resources and approaches to create a personalized learning experience.`,
  },
};
