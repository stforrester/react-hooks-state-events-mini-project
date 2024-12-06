import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [selected, setSelected] = useState("");
  const [tasks, setTasks] = useState(TASKS);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks,newTask]);
  }
  
  const filteredTasks = ((selected === "" || selected === "All") ? tasks : tasks.filter((task) => task.category === selected));
  
  //console.log("Filtered Tasks: ", filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList filteredTasks={filteredTasks} />
    </div>
  );
}

export default App;
