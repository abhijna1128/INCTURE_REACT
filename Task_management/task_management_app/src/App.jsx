import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { TaskContext } from './context/TaskContext'
import { TaskProvider } from './context/TaskContext'
import TaskForm from './component/TaskForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
         {/* <TaskProvider>
      <TaskList />
    </TaskProvider> */}
      <TaskForm/>
      </div>
  )
}

export default App;
