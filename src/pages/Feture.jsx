import ScrollTop from "../Hooks/ScrollTop";

export default function Feture() {
       ScrollTop()
  return (
    <>
      <div className="container mx-auto lg:my-24 my-14">
        <div className=" w-full gap-20 items-center">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <h1 className="lg:text-6xl text-2xl font-bold max-w-xl">
              From on top of it to in control.
            </h1>
            <p className="text-gray-500 text-lg leading-8">
              TaskTrove ensures that all aspects are meticulously organized and
              managed, empowering you to focus on what truly matters and make
              significant strides in your priorities.
            </p>
          </div>
          <div className="">
            <img
              className="mx-auto"
              src="https://i.ibb.co/9bP8zXd/Master-Task-List.png"
              alt="task"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:my-24 my-14">
        <div className="flex flex-col lg:flex-row  items-center gap-20">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/xfjZ1BW/task-list-vector-illustration-list-time-management-work-planning-organization-daily-goals-landing-pa.jpg"
              alt="task"
            />
          </div>
          <div className="flex-1 max-w-xl space-y-5">
            <h5 className="text-xl text-red-400 font-semibold">
            Find Your Tasks Instantly
            </h5>
            <h1 className="text-4xl font-bold max-w-">
            Instant task retrieval for easy organization.
            </h1>
            <p className="text-gray-500 text-lg leading-8">
            Navigate through your tasks with ease using our powerful search feature. Quickly locate specific tasks or filter by keywords, making organization seamless and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:my-24 my-14">
      <div className="flex flex-col lg:flex-row gap-20 items-center">        

        <div className="flex-1 order-1 lg:order-0 max-w-xl space-y-5">
     
          <h5 className="text-xl text-red-400 font-semibold">Enhance Productivity with Drag-and-Drop Status Changes</h5>
          <h1 className="text-4xl font-bold max-w-">Effortless status updates with drag-and-drop.</h1>
          <p className="text-gray-500 text-lg leading-8">
          Experience a fluid workflow by simply dragging and dropping tasks to update their status. No more cumbersome clicks—effortlessly manage your tasks and keep your projects on track.
          </p>
        </div>
      <div className="flex-1 order-0 lg:order-1 ">

          <img className="w-full p-10" src="https://i.ibb.co/yP7tNy6/prjct-mangmnt-wrkflwsftwre.png" alt="task" />
        </div>
      </div>
    </div> 

    <div className="container mx-auto lg:my-24 my-14">
        <div className="flex flex-col lg:flex-row  items-center gap-20">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/cYHjQ2K/easy-edit-flat-illustration-work-plans-203633-7591.jpg"
              alt="task"
            />
          </div>
          <div className="flex-1 max-w-xl space-y-5">
          <h5 className="text-xl text-red-400 font-semibold">On-the-go task customization for precision.</h5>
          <h1 className="text-4xl font-bold max-w-">Tailor Tasks to Fit Your Needs</h1>
          <p className="text-gray-500 text-lg leading-8">
          Enjoy complete control over your tasks with our easy-to-use edit option. Modify details, add notes, or adjust priorities on the fly, ensuring each task aligns perfectly <br /> with your evolving goals.
          </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:my-24 my-14">
      <div className="flex flex-col lg:flex-row gap-20 items-center">        

        <div className="flex-1 order-1 lg:order-0 max-w-xl space-y-5">
     
          <h5 className="text-xl text-red-400 font-semibold">Never Miss a Deadline Again</h5>
          <h1 className="text-4xl font-bold max-w-">Easy due date setting for effective time management.</h1>
          <p className="text-gray-500 text-lg leading-8">
          Stay on top of your schedule by setting due dates effortlessly. Our due date option ensures you prioritize tasks effectively, keeping you organized and in control of your time.
          </p>
        </div>
      <div className="flex-1 order-0 lg:order-1 ">

          <img className="w-full p-10" src="https://i.ibb.co/TmgWSVH/pngtree-working-time-management-illustration-png-image-6267772.jpg" alt="task" />
        </div>
      </div>
    </div> 
    
    </>
  );
}
