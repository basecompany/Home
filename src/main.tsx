import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import {App} from './App.tsx'
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <ToastContainer theme="dark" position={"bottom-right"}/>

      </BrowserRouter>
  </StrictMode>,
)
