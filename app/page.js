export default function Page() {
  
  return (
      <>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#85af98] to-[#859caf] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cecilia Chimento
            </h1>
            <h2 className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
              Full Stack Software Engineer
            </h2>
            <p className="mt-3 text-lg leading-8 text-gray-600">
              I need to figure out what I want to say here... ughhhhh so hard talking about myself. blah blah blah
            </p>
            <div className="grid grid-cols-3 mt-2 justify-items-center">
              <span className="mt-1 text-lg leading-8 text-gray-600"> <a href="/about">Get to Know Me</a></span>
              <span className="mt-1 text-lg leading-8 text-gray-600"> <a href="/about">View My Projects</a></span>
              <span className="mt-1 text-lg leading-8 text-gray-600"> <a href="/about">Get in Touch</a></span>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-33rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#85af98] to-[#859caf] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </>
  );
}