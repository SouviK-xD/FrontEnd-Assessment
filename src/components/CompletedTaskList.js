import React from 'react';
import TaskItem from './TaskItem';
import '../styles/CompletedTaskList.css';

const CompletedTaskList = ({ tasks, toggleComplete, toggleImportant }) => {
  return (
    <div className="completed-task-list">
      <h2>Completed</h2>
      <div className="tasks">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} toggleImportant={toggleImportant} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskList;
