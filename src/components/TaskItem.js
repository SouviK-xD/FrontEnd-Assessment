import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, toggleComplete, toggleImportant }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => toggleImportant(task.id)}>{task.important ? '★' : '☆'}</button>
    </div>
  );
};

export default TaskItem;
