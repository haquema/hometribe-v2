import SubscriptionForm from "../SubscriptionForm";

export default function ResultCard(answers) {
  let tallyScore = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++ ) {
      sum += scores[i];
    }
    return sum;
  }

  let score = tallyScore(answers);
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
      <SubscriptionForm showDescription={true} description={'Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!'} />
    </div>
  )
}


const titles = {
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