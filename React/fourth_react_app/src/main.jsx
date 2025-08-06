import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import Store from './middleware/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
