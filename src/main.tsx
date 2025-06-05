/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.module.css'
import { TodoContextProvider } from './contexts/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContextProvider>
       <App /> 
    </TodoContextProvider>
  </StrictMode>,
) */

import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import './index.module.css'
import { TodoContextProvider } from './contexts/TodoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoContextProvider>
       <App /> 
    </TodoContextProvider>
  </React.StrictMode>,
)
