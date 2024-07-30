import React, { useState } from 'react';
import '../styles/AddTask.css';

const AddTask = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form  className="add-task" onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Add a Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        
      />
      
      <img src="Frame 2.jpg" alt="Icon" className="input-image" />

      <button className="add-task button" type="submit">ADD TASK</button>
    </form>
  );
};

export default AddTask;
