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
    <div ref={drop} style={{ border: isOver ? '2px dashed #000' : 'none' }}>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
