import SubscriptionForm from "./components/SubscriptionForm";
import QuizBubble from "./components/QuizComponent/QuizBubble";
import { Divider } from "@nextui-org/react";
import Gallery from "./components/Gallery";
import QuizCard from "./components/QuizComponent/QuizCard";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <main className="flex flex-col w-full gap-12 p-6 md:p-8 max-w-[640px] self-center mb-10 text-gray-900">
        <div className="flex flex-col w-full gap-8">
          <h1 className="w-full text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Homeschooling,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Simplified and Connected.
            </span>
          </h1>
          <Divider className="py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 w-20"/>
          <div className="space-y-4">
            <p className="w-full text-lg text-gray-700 leading-relaxed">
              We&apos;re building a platform to help you navigate homeschooling with ease.
            </p>
            <p className="w-full text-lg text-gray-700 leading-relaxed">
              We&apos;re not ready just yet - but if you&apos;re interested in our journey, 
              <span className="font-semibold text-blue-600"> let&apos;s stay in touch:</span>
            </p>
          </div>
          <div id="mailing-list" className="flex flex-col gap-4 items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <SubscriptionForm 
              showDescription={true} 
              description={'We\'ll only ever use your email for updates'}
            />
          </div>
          <div className="flex flex-col w-full gap-12">
            <div className="mt-4">
              <QuizCard />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Gallery />
        </div>
      </main>
    </div>
  );
}