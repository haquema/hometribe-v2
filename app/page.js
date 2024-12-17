import SubscriptionForm from "./components/SubscriptionForm";
import QuizBubble from "./components/QuizComponent/QuizBubble";
import { Divider } from "@nextui-org/react";
import Gallery from "./components/Gallery";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
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
      <div id="mailing-list" className="flex flex-col gap-2 items-start">
        <p className="text-base pl-1">We&apos;re not quite ready yet—stay updated on our journey and <span className="font-semibold">keep in touch:</span></p>
        <SubscriptionForm showDescription={false} description={'We\'ll only ever use your email for updates'}/>
      </div>
      {/* <div className="gap-4 flex flex-col ">
        <WrenchScrewdriverIcon className="size-24 stroke-1 self-center" />
      </div> */}
      {/* <QuizBubble /> */}
    </div>
  )
}