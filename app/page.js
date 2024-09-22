import { Input, Button } from "@nextui-org/react";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import QuizCard from "./components/QuizCard";

export function SubscriptionComponent() {

  return (
    <Input 
      type="email"
      label="Email"
      description="Stay updated on our journey as we develop hometribe—sign up to receive exclusive news, tips, and early access to our platform."
      endContent={
        <Button radius="lg" isIconOnly color="primary" 
          className="w-0 bg-red-600"
        >
          <EnvelopeIcon className="size-5 text-white"/>
        </Button>
      }
    />
  
  )
}

export default function Page() {

  return (
    <div className="flex flex-col w-[400px] gap-10 m-10 mb-10">
      <h1 className="text-4xl font-semibold">Homeschooling, Simplified and Connected</h1>
      <p className="">At hometribe, our mission is simple: to make homeschooling easier, personalised, and more connected.<br /><br />Every family should have the freedom to shape their child&apos;s education in a way that fits their unique needs, interests, and goals.<br /><br />We&apos;re building a platform where homeschoolers can connect with like-minded families, find trusted resources, connect with reputable vendors, and plan their homeschooling journey with the help of AI-driven tools.<br /><br />We&apos;re not ready just yet, but let&apos;s stay in touch.</p>
      <SubscriptionComponent />
      <QuizCard />
    </div>
  )
}