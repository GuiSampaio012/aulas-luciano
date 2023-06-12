import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './componentes/pages/login';
import Cadastrar from './componentes/pages/cadastrar';
import Produtos from './componentes/pages/produtos';
import ProdutoDetalhe from './componentes/pages/produtoDetalhe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar/>
  },
  {
     path: "/produtos",
     element: <Produtos/>
  },
  {
     path: "/produtodetalhe/:id",
     element: <ProdutoDetalhe/>
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
