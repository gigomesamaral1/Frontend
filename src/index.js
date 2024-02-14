import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Abertura from './pages/abertura';
import Cadastro from './pages/cadastro';
import Chamados from './pages/chamados';
import Suporte from './pages/suporte';
import Sobre from './pages/sobre';
import Dashboard from './pages/dashboard';
import Dropdown from './pages/dropdown'; 
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Senha from './pages/senha';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "chamados",
    element: <Chamados />
  },
  {
    path: "abertura",
    element: <Abertura />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "suporte",
    element: <Suporte />
  },
  {
    path: "sobre",
    element: <Sobre />
  },
  {
    path: "dropdown",
    element: <Dropdown />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "senha",
    element: <Senha />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
