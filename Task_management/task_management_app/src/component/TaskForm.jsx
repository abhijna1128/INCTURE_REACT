import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext); 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedTitle = sessionStorage.getItem("usertitle");
    if (savedTitle) setTitle(savedTitle);

    const savedDescription = sessionStorage.getItem("userdescription");
    if (savedDescription) setDescription(savedDescription);
  }, []);

  const handleChange = (event) => {
    setTitle(event.target.value);
    sessionStorage.setItem("usertitle", event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
    sessionStorage.setItem("userdescription", event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ id: Date.now(), title, description });

    setTitle("");
    setDescription("");
    sessionStorage.removeItem("usertitle");
    sessionStorage.removeItem("userdescription");
  };

return (
  <form onSubmit={handleSubmit} className="task-form">
    <h3>Add Task</h3>
    <input
      type="text"
      placeholder="Task Title"
      value={title}
      onChange={handleChange}
      required
    />
    <textarea
      placeholder="Task Description"
      value={description}
      onChange={handleDescription}
    />
    <button type="submit" className="add-task-btn">
      Add Task
    </button>
  </form>
);

};

export default TaskForm;
