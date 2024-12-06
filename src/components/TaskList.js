import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [tasksState, setTasksState] = useState(tasks);

  function handleDelete(text) {
    const newTasksArray = tasksState.filter((task) => task.text !== text);
    setTasksState(newTasksArray);
  };

  const tasksList = tasksState.map((task => {
    return (
      <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
    );
  }))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
