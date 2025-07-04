export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Discover Your Homeschooling Journey
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Find out if homeschooling is right for your family with our interactive quiz.
        Get personalized insights and guidance to make an informed decision.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Take the Quiz
        </button>
        <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
} 