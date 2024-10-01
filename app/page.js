import SubscriptionForm from "./components/SubscriptionForm";
import QuizCard from "./components/QuizComponent/QuizCard";
import Collage from "./components/Collage";
import { Divider, Image } from "@nextui-org/react";


export default function Page() {

  return (
        <div className="flex flex-col w-full gap-6 p-4 max-w-[500px] self-center">
          <h1 className="w-full text-3xl font-bold text-black">Simplified.<br />Connected.<br/>Homeschooling.</h1>
          <div className="flex flex-col gap-4">
            {/* <p className="mb-6">Every family should have the freedom to shape their child&apos;s education in a way that fits their unique needs, interests, and goals.</p> */}
            <Divider className="py-1 bg-black w-1/4"/>
            <p className="w-full font-semibold text-xl mb-10">At hometribe, our mission is <span className="highlight-red">simple</span>: to make <span className="highlight-red">homeschooling</span> easier, personalised, and more <span className="highlight-red">connected</span>.</p>
            <Collage />
            <p className="w-full mt-4">We&apos;re building a platform where homeschoolers can connect with like-minded families, find trusted resources, connect with reputable vendors, and plan their homeschooling journey with the help of AI-driven tools.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>We&apos;re not ready just yet, but <span className="font-semibold">let&apos;s stay in touch.</span></p>
            <SubscriptionForm showDescription={false} description={'We\'ll only ever use your email for updates'}/>
          </div>
          <QuizCard />
        </div>
  )
}