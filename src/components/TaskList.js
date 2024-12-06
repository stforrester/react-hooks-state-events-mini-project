import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const tasksList = tasks.map((task => {
    return (
      <Task key={task.text} text={task.text} category={task.category} />
    )
  }))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
