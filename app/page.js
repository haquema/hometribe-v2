import SubscriptionForm from "./components/SubscriptionForm";
import QuizCard from "./components/QuizComponent/QuizCard";

export default function Page() {

  return (
        <div className="flex flex-col w-full gap-8 p-4 max-w-[500px] self-center">
          <h1 className="w-full text-3xl font-semibold">Simplified<br />Connected<br/>Homeschooling.</h1>
          <div className="flex flex-col gap-3">
            <p className="w-full">At hometribe, our mission is simple: to make homeschooling <span className="highlight-red">easier</span>, <span className="highlight-red">personalised</span>, and more <span className="highlight-red">connected</span>. Every family should have the freedom to shape their child&apos;s education in a way that fits their unique needs, interests, and goals.</p>
            <p className="w-full ">We&apos;re building a platform where homeschoolers can connect with like-minded families, find trusted resources, connect with reputable vendors, and plan their homeschooling journey with the help of AI-driven tools.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">We&apos;re not ready just yet, but let&apos;s stay in touch.</p>
            <SubscriptionForm showDescription={true} description={'We\'ll only ever use your email for updates'}/>
          </div>
          <QuizCard />
        </div>
  )
}