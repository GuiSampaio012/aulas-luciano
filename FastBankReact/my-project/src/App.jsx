import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/navBar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Cadastrar from './pages/cadastrar'
import axios from 'axios'
import Transferencia from './pages/transferencia'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  

  const logar = (login, senha) => {
    // essa funcão LOGA
    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
      email: login,
      password: senha
    }).then(res => {
      localStorage.setItem('dados',JSON.stringify(res.data))
      navigate('/')
    })
    
    
    console.log('function logar:');

  }


  const refresh = () => {
    const token = JSON.parse(localStorage.getItem('dados'))
    axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {
      refresh: token.refresh
    }).then(res => localStorage.setItem('dados', JSON.stringify({...token, access: res.data.access})))

  }


  const deslogar = () => {
    //1 - limpar localstorage
    localStorage.clear()
    //2 - alterar o state setLogado
    console.log('deslogouuuuu')
    alert('DESLOGOU')
    navigate('/login')
    //3 - redirecionar para o login
  }

  // useEffect(()=>{
  //   if(logado==false){
  //     navigate('/')
  //   }
  //   else{
  //     setLogado(true)
  //   }
  // },[logado])

  return (
    <>
      {window.location.pathname == '/login' ? null : <NavBar deslogar={deslogar}/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login onClick={logar}/>} />
        <Route path='/cadastro' element={<Cadastrar/>} />
        <Route path='/transferencia' element={<Transferencia/>} />
      </Routes>
    </>
  )
}

export default App
