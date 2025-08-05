import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import ProductList from './component/ProductList'
import Cart from './component/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Redux: State Management</h1>
      {/* <Counter/> */}
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default App
