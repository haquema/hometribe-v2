import { SubscriptionComponent } from "@/app/page";

export default function ResultCard(score) {
  let result;
  if (score >= 4) {
    result = titles[1];
  } else if (score >= 2) {
    result = titles[2];
  } else {
    result = titles[3]
  }
  
  return (
    <div className="flex flex-col justify-center items-start gap-2 px-6">
      <p className="font-semibold text-xl self-center">{result.title}</p>
      <p className="my-1">{result.description}</p>
      <p className="text-sm mt-3">Subscribe to our mailing list to receive a copy of your results and keep up to date with our journey!</p>
      <SubscriptionComponent />
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