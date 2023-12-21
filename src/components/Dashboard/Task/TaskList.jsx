/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// TaskList.js

import { useDrop } from 'react-dnd';
import Task from './Task';
const ItemTypes = {
  TASK: 'task',
};
const TaskList = ({ tasks, status, onTaskStatusChange }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => onTaskStatusChange(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`rounded-lg  overflow-hidden ${tasks.length === 0 && "mb-10 "} `} style={{ border: isOver ? '2px dashed #000' : '2px dashed #00000000' }}>
      <h2 className='text-xl sticky top-0 text-center bg-red-300 capitalize text-white py-3'>{status}</h2>  
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
