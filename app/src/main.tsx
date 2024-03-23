import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import FetchGetRequest from './component1.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FetchGetRequest />
    {/* <App /> */}
  </React.StrictMode>,
)
