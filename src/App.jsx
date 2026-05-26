import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// Importamos el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// BootStrap y BootStrap-icons
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css'; 

function App() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-primary mb-4">React 19 + Bootstrap</h1>
      <button className="btn btn-success btn-lg mi-sombra-chula">
        {/* Verifica que la clase sea 'bi bi-check-circle-fill' */}
        <i className="bi bi-check-circle-fill me-2"></i>
        BootStrap + BootStrap-Icons configurados
      </button>
    </div>
  );
}

export default App;