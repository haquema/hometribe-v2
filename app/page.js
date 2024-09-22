import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { EnvelopeIcon } from '@heroicons/react/24/solid'


function SubscriptionComponent() {
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

function QuizComponent() {
  return (
    <Card className="bg-red-200">
      <CardBody className="">
        <div className="gap-1 flex flex-col mx-4">
          <h2 className="text-lg font-semibold">Wondering if homeschooling is the right fit for your family?</h2>
          <p className="">Take our quick, insightful quiz to find out!</p>
          <Button className="bg-red-600 text-white mt-4 flex w-fit self-center">
            Start the quiz
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}


export default function Page() {
  return (
    <div className="flex flex-col w-[400px] gap-10 m-10">
      <h1 className="text-4xl font-semibold">Homeschooling, Simplified and Connected</h1>
      <p className="">At hometribe, our mission is simple: to make homeschooling easier, personalised, and more connected.<br /><br />Every family should have the freedom to shape their child&apos;s education in a way that fits their unique needs, interests, and goals.<br /><br />We&apos;re building a platform where homeschoolers can connect with like-minded families, find trusted resources, connect with reputable vendors, and plan their homeschooling journey with the help of AI-driven tools.<br /><br />We&apos;re not ready just yet, but let&apos;s stay in touch.</p>
      <SubscriptionComponent />
      <QuizComponent />
    </div>
  )
}