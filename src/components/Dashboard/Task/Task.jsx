/* eslint-disable react/prop-types */
// Task.js

import { useDrag } from 'react-dnd';

const ItemTypes = {
  TASK: 'task',
};

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid #ddd',
        padding: '8px',
        marginBottom: '8px',
      }}
    >
      {task.title}
    </div>
  );
};

export default Task;
