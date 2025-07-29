import React, { useContext } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Content />
      </TaskProvider>
    </ThemeProvider>
  );
}

function Content() {
  const { toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <div className="app-wrapper" style={themeStyles}>
      <h2>Task Management App</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
