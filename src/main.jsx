import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 1. IMPORTACIONES GLOBALES DE BOOTSTRAP (CSS y JS)
// Esto asegura que todos los componentes tengan los estilos base y animaciones
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 2. IMPORTACIÓN GLOBAL DE BOOTSTRAP-ICONS
// Así puedes usar cualquier icono (<i className="bi bi-..."></i>) en cualquier parte de la web
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'

// NOTA: Se ha eliminado "import './index.css'" para limpiar los bordes y márgenes por defecto de Vite

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)