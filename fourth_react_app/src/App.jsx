import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
import User from './api/User'
import User2 from './api/User2'
import User3 from './api/User3'
import Fetch from './middleware/Fetch'
import Error1 from './error/Error1'
import Error2 from './error/Error2'
import ErrorBoundary from './error/ErrorBoundary'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Redux: State Management</h1> */}
      <h1>Api fetching in React</h1>
      {/* <Counter/> */}
      {/* <ProductList/>
      <Cart/> */}
      {/* <User/> */}
      {/* <User2/> */}
      {/* <User3/> */}
      {/* <Fetch/> */}
      {/* <Error1 name="Abhi"/> */}
      {/* <Error2/> */}
      <ErrorBoundary>
      <Error1 name="Abhi"/>
      <Error2/>
      </ErrorBoundary>

    </div>
  )
}

export default App
