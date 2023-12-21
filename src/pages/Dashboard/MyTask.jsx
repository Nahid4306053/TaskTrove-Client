// App.js
import  { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from '../../components/Dashboard/Task/TaskList';

const MyTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'ongoing' },
    { id: 3, title: 'Task 3', status: 'completed' },
    // Add more tasks as needed
  ]);

  const handleTaskStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const ongoingTasks = tasks.filter((task) => task.status === 'ongoing');
  const completedTasks = tasks.filter((task) => task.status === 'completed');

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TaskList tasks={todoTasks} status="To-Do" onTaskStatusChange={handleTaskStatusChange} />
        <TaskList tasks={ongoingTasks} status="On Going" onTaskStatusChange={handleTaskStatusChange} />
        <TaskList tasks={completedTasks} status="Completed" onTaskStatusChange={handleTaskStatusChange} />
      </div>
    </DndProvider>
  );
};

export default MyTask;
