import React from "react";

const TaskItem = React.memo(({ task, onEdit, onDelete }) => {
  console.log("Rendering TaskItem:", task.id);
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
});

export default TaskItem;
