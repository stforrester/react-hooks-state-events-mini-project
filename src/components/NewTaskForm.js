import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);
    setTaskText("");
    setTaskCategory(categories[1]);
  }

  const categorySelections = categories
    .filter(category => category !== "All")
    .map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} >
          {/* render <option> elements for each category here */}
          {categorySelections}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
