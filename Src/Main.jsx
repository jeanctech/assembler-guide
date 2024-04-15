import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import Index from './Components/Index'
import Formulario from './Components/Formulario'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Index />
    <Formulario />
  </React.StrictMode>,
)
