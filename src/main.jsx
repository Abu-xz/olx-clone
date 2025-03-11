import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseContext } from './store/context.js'
import { app } from './firebase/setup'
import AuthContextProvider from './store/Auth/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ app }}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </FirebaseContext.Provider>
  </StrictMode>,
)
