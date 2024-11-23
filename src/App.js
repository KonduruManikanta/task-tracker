import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  const editTask = (index) => setEditingTask({ index, task: tasks[index] });

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === editingTask.index ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      {editingTask ? (
        <EditTask
          task={editingTask.task}
          updateTask={updateTask}
          cancelEdit={() => setEditingTask(null)}
        />
      ) : (
        <AddTask addTask={addTask} />
      )}
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
