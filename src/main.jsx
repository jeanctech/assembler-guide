import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import Index from './components'
import Formulario from './components/formulario'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Index />
    <Formulario />
  </React.StrictMode>,
)
