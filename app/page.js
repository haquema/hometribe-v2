import SubscriptionForm from "./components/SubscriptionForm";
import QuizBubble from "./components/QuizComponent/QuizBubble";
import { Divider, Accordion, AccordionItem, Button } from "@nextui-org/react";
import Gallery from "./components/Gallery";
import { WrenchScrewdriverIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import QuizCard from "./components/QuizComponent/QuizCard";


export default function Page() {

  return (
    <div className="flex flex-col w-full gap-10 p-4 max-w-[500px] self-center mb-10 text-black">
      <div className="flex flex-col w-full gap-6">
      <h1 className="w-full text-3xl font-bold text-black">Homeschooling,<br />Simplified and Connected.</h1>
        {/* <p className="mb-6">Every family should have the freedom to shape their child&apos;s education in a way that fits their unique needs, interests, and goals.</p> */}
        <Divider className="py-1 bg-black w-1/4"/>
        <p className="w-full font-medium text-lg">Educating your child at home can be daunting. We&apos;re building a platform to make homeschooling easier.</p>
        <QuizCard />
      </div>
      <Gallery />
      <div id="mailing-list" className="flex flex-col gap-2 items-center">
        <p className="text-base pl-1">If you&apos;re interested in staying updated on our journey, <span className="font-semibold">let&apos;s stay in touch.</span></p>
        <SubscriptionForm showDescription={false} description={'We\'ll only ever use your email for updates'}/>
      </div>
      <div className="gap-4 flex flex-col ">
        <WrenchScrewdriverIcon className="size-24 stroke-1 self-center" />
        <p className="w-3/4 text-center self-center">We&apos;re building a platform where homeschoolers can connect with like-minded families, find trusted resources, connect with reputable vendors, and plan their homeschooling journey with the help of AI-driven tools.</p>
      </div>
    </div>
  )
}