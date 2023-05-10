import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/navBar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Cadastrar from './pages/cadastrar'
import axios from 'axios'
import Produtos from './pages/produtos'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const logar = (login, senha) => {
    console.log('function logar:');

    // essa funcão LOGA
    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
      username: login,
      password: senha
    }).then(res => localStorage.setItem('dados',JSON.stringify(res.data)))
    navigate('/')

  }


  const refresh = () => {
    const token = JSON.parse(localStorage.getItem('dados'))
    axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {
      refresh: token.refresh
    }).then(res => localStorage.setItem('dados', JSON.stringify({...token, access: res.data.access})))

  }


  const deslogar = () => {
    //3 etapas
    //1 - limpar localstorage
    localStorage.clear()
    //2 - alterar o state setLogado
    setLogado(false)
    //3 - redirecionar para o login
    navigate('/login')
  }

  return (
    <>
      {window.location.pathname == '/login' ? null : <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onClick={logar} />} />
        <Route path='/cadastro' element={<Cadastrar />} />
        <Route path='/produtos' element={<Produtos/>} />
      </Routes>
    </>
  )
}

export default App
