/* eslint-disable no-unused-vars */
// App.js
import  { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from '../../components/Dashboard/Task/TaskList';
import useTasks from '../../Hooks/useTasks';
import SmallLoading from '../../components/shared/SmallLoading';
import SmallError from '../../components/shared/SmallError';
import useAxiosSecureV1 from '../../Hooks/useAxiosSecureV1';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import TaskDetailsModel from './TaskDetailsModel';
import EditTask from './EditTask';
const MyTask = () => {
  const {Tasks,error,isError,isLoading,isSuccess} = useTasks() 
  const AxiosSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const [viewtaskById,settaskID] = useState()
  const mutation = useMutation({
    mutationFn : async (data)=>{
      const res = AxiosSecureV1.patch(`/task/status/${data.taskId}`,{status:data.status});
      return res;
    },
    onSuccess :()=>{
      QueryClient.invalidateQueries("Tasks")
    },
    onError : (err)=>{
      toast.error(err.message)
    }
    ,
  
  }) 
  const handleTaskStatusChange = (taskId, newStatus) => {
    mutation.mutate({taskId:taskId,status:newStatus})
  };



  return (
    <>
    
    <DndProvider backend={HTML5Backend}>
     {isLoading ? <SmallLoading></SmallLoading>
      :isError ? <SmallError></SmallError>
      :
      <>
      <div className="flex  my-10"> <h1 className="p-5 mx-auto px-10 text-xl text-center bg-red-400 text-white   clipshape2 shadow-lg">
        My Tasks
        </h1>
        </div>
      <div className='p-7  flex lg:flex-row flex-col gap-7 justify-between'>
        <div className='flex-1 custom-scrollbar max-h-[800px] overflow-y-auto'>
        <TaskList settaskID={settaskID} tasks={Tasks.data?.todo} status="to-do" onTaskStatusChange={handleTaskStatusChange} />
        </div>
        <div className='flex-1 flex flex-col h-full gap-7'>
        <div className='lg:flex-1 custom-scrollbar max-h-[400px] overflow-y-auto'>
        <TaskList settaskID={settaskID} tasks={Tasks.data?.ongoing} status="ongoing" onTaskStatusChange={handleTaskStatusChange} />
        </div>
        <div className='lg:flex-1 custom-scrollbar max-h-[400px] overflow-y-auto'>
        <TaskList settaskID={settaskID} tasks={Tasks.data?.completed} status="completed" onTaskStatusChange={handleTaskStatusChange} />
        </div>
        </div>
         
      </div>
      </>   
     }
    </DndProvider>
    <TaskDetailsModel id={viewtaskById}></TaskDetailsModel>
    <EditTask id={viewtaskById}></EditTask>
    </>
  );   
};

export default MyTask;
