import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
