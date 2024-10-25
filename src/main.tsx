/**
 * @fileoverview Entry point for the React application.
 * 
 * This file sets up the root of the React application and renders the main App component
 * within a StrictMode and BrowserRouter context.
 * 
 * @remarks
 * - `StrictMode` is a tool for highlighting potential problems in an application.
 * - `BrowserRouter` is a router implementation that uses the HTML5 history API.
 * 
 * @packageDocumentation
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
