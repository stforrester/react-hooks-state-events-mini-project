import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ filteredTasks }) {

  const [tasksState, setTasksState] = useState(filteredTasks);

  useEffect(() => {
    setTasksState(filteredTasks);
  }, [filteredTasks]);

  function handleDelete(text) {
    const newTasksArray = tasksState.filter((task) => task.text !== text);
    setTasksState(newTasksArray);
  };

  const tasksList = tasksState.map((task) => {
    return (
      <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
    );
  })

  console.log("Tasks in tasksState: ", tasksState);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
