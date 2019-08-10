import React from 'react';
import './App.css';
import TaskList from './pages/TaskList';

function App() {
  return (
    <div className="App">
      <TaskList day="Monday"/>
      <TaskList day="Tuesday"/>
      <TaskList day="Wednesday"/>
      <TaskList day="Thursday"/>
      <TaskList day="Friday"/>
    </div>
  );
}

export default App;
