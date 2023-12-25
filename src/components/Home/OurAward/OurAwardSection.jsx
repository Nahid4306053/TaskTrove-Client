export default function OurAwardSection() {
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="flex flex-col lg:flex-row  items-center gap-20">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/Jx73KGz/Project-Management-Illustration.jpg"
              alt="task"
            />
          </div>
          <div className="flex-1 max-w-xl space-y-5">
            <h5 className="text-xl text-red-400 font-semibold">
              Focus on what’s important
            </h5>
            <h1 className="text-4xl font-bold max-w-">
              Reach that mental clarity you’ve been longing for.
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              Your tasks are automatically sorted into Today, Upcoming, and
              custom Filter views to help you prioritize your most important
              work.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-1 lg:order-0 max-w-xl space-y-5">
            <h5 className="text-xl text-red-400 font-semibold">
              Clear your mind
            </h5>
            <h1 className="text-4xl font-bold max-w-">
              The fastest way to get tasks out of your head.
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              Type just about anything into the task field and TaskTrove’s
              one-of-its-kind natural language recognition will instantly fill
              your to-do list.
            </p>
          </div>
          <div className="flex-1 order-0 lg:order-1 bg-b">
            <img
              src="https://i.ibb.co/Z2jbhcp/isometric-time-management-concept-illustrated-52683-55534.jpg"
              alt="task"
            />
          </div>
        </div>
      </div>
    </>
  );
}
