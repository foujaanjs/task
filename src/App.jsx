import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import "./Style.css"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
      tasks.filter((_, i) => i != index);
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
      <p className="tagline">Our Friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      {tasks.length > 0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear All</button>)}
    </div>
  )
}

