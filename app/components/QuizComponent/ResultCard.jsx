import SubscriptionForm from "../SubscriptionForm";

export default function ResultCard(answers) {
  let tallyScore = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++ ) {
      sum += scores[i];
    }
    return sum;
  }

  let score = tallyScore(answers);``
  let result;

  if (score >= 4) {
    result = titles[1];
  } else if (score >= 2) {
    result = titles[2];
  } else {
    result = titles[3]
  }
  
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 my-4 px-2">
      <p className="font-semibold text-xl self-center">{result.title}</p>
      <p className="my-1">{result.description}</p>
      {/* <SubscriptionForm showDescription={true} description={'Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!'} /> */}
    </div>
  )
}


const titles = {
  1: {
    title: 'Homeschool Hero',
    description: "You\’re ready to homeschool! You\’ve embraced homeschooling and understand that there are many ways to make it work for your family. Whether it\’s a personalised curriculum or using online resources, you\’re confident that homeschooling is best for your child. You\’ve got this!"
  },
  2: {
    title: 'Homeschool Curious',
    description: "You\’re warming up to the idea! You might need a little more information or confidence to take the plunge. Remember, there\’s no “perfect” way to homeschool—just find what works for your family. Whether you start small or dive right in, your willingness to explore homeschooling is the first step toward a unique and rewarding educational journey."
  },
  3: {
    title: "Homeschool Explorer",
    description: "Homeschooling may not be the right fit for you right now—and that\’s completely okay! Every family and child is different, and the most important thing is finding what works best for your situation. Whether you continue with traditional schooling or explore other educational options, your decision will always be about what\’s best for your child\’s learning and happiness. Keep exploring, and trust that whatever path you choose is the right one for your family!"
  }
}