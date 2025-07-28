import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useState,useEffect } from "react";

const TaskForm=()=>{
    const {addtask}=useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
useEffect(()=>{
    // sessionStorage.removeItem("username");
    const savedTitle=sessionStorage.getItem("usertitle");
    if(savedTitle){
      setTitle(savedTitle);
    }
    // sessionStorage.removeItem("usermail");
    const savedDescription=sessionStorage.getItem("userdescription");
    if(savedDescription){
       setDescription(savedDescription);
    }

},[]);
 const handleChange=(event)=>{
    setTitle(event.target.value);
    sessionStorage.setItem("usertitle",event.target.value);
  }
  const handleDescription=(event)=>{
    setDescription(event.target.value);
    sessionStorage.setItem("userdescription",event.target.value);
  }
   return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(handleChange) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Task Description" value={description} onChange={(handleDescription) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
    )
}
export default TaskForm;
















// import { useContext, useState, useEffect } from "react";
// import { TaskContext } from "../context/TaskContext";

// const TaskForm = () => {
//   const { addTask } = useContext(TaskContext); // correct function name

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Load saved values from sessionStorage when component mounts
//   useEffect(() => {
//     const savedTitle = sessionStorage.getItem("usertitle");
//     const savedDescription = sessionStorage.getItem("userdescription");
//     if (savedTitle) setTitle(savedTitle);
//     if (savedDescription) setDescription(savedDescription);
//   }, []);

//   // Save to sessionStorage whenever title or description changes
//   useEffect(() => {
//     sessionStorage.setItem("usertitle", title);
//     sessionStorage.setItem("userdescription", description);
//   }, [title, description]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;

//     addTask({
//       id: Date.now(),
//       title,
//       description,
//     });

//     // Clear input and session storage after adding task
//     setTitle("");
//     setDescription("");
//     sessionStorage.removeItem("usertitle");
//     sessionStorage.removeItem("userdescription");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <h3>Add Task</h3>
//       <input
//         type="text"
//         placeholder="Task Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <br />
//       <textarea
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <br />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;
