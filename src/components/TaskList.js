import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import '../styles/TaskList.css';
import CompletedTaskList from './CompletedTaskList';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false, important: false },
    { id: 2, text: 'Finish project report', completed: false, important: true },
    { id: 3, text: 'Call the bank', completed: false, important: false },
    { id: 4, text: 'Schedule dentist appointment', completed: false, important: false },
    { id: 5, text: 'Plan weekend trip', completed: false, important: false },
    { id: 6, text: 'Read a book', completed: true, important: false },
    { id: 7, text: 'Clean the house', completed: true, important: false },
    { id: 8, text: 'Prepare presentation', completed: true, important: false },
    { id: 9, text: 'Update blog', completed: true, important: false },
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: tasks.length + 1, text: taskText, completed: false, important: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const toggleImportant = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, important: !task.important } : task));
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list-container">
      <div className="task-list">
        <AddTask addTask={addTask} />
        <h2>To Do</h2>
        <div className="tasks">
          {pendingTasks.map(task => (
            <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} toggleImportant={toggleImportant} />
          ))}
        </div>
      </div>
      <CompletedTaskList tasks={completedTasks} toggleComplete={toggleComplete} toggleImportant={toggleImportant} />
    </div>
  );
};

export default TaskList;
