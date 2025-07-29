import React, { useContext, useState, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleEdit = useCallback((task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  }, []);

  const handleUpdate = useCallback(() => {
    updateTask(editId, { title: editTitle, description: editDescription });
    setEditId(null);
    setEditTitle("");
    setEditDescription("");
  }, [editId, editTitle, editDescription, updateTask]);

  return (
    <div>
      <h3>Task List</h3>
      {tasks.length === 0 && <p>No tasks yet</p>}
      {tasks.map((task) =>
        editId === task.id ? (
          <div key={task.id}>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setEditId(null)}>Cancel</button>
          </div>
        ) : (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={deleteTask}
          />
        )
      )}
    </div>
  );
};

export default TaskList;
