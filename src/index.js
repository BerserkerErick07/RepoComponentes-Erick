import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App';
import './index.css'; // Si tienes estilos globales

const container = document.getElementById('root'); // Obtén el elemento raíz
const root = createRoot(container); // Crea una raíz

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
