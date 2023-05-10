import { useState } from 'react'
import Login from './pages/login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './componentes/navBar'
import axios from 'axios'
import Carrinho from './pages/carinho'
import Produtos from './pages/produtos'
import ProdutoDetalhe from './pages/produtoDetalhe'
import Cadastrar from './pages/cadastrar'
import { info } from 'autoprefixer'

function App() {
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  const logar = (login, senha) =>{
    const defaultOptions = {
      headers: {
        Authorization: `JWT + ${getAccessToken()}`
      }
    }


    axios.get('http://127.0.0.1:8000/backPalmeiras/clientes',
    {...defaultOptions}).then((res) =>{
      console.log(res)
    })

    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
      username: login,
      password: senha
    }).then((res) => {
      console.log(res)
      localStorage.setItem("dados", JSON.stringify({acesso:data.access, refresh:data.refresh }));
    })

    axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {

    }).then((res) => {
      getRefreshToken
      //token de acesso
      //setar o token no localStorage
    })

    localStorage.setItem("log", JSON.stringify({login: login, senha: senha}))
    setLogado = true
    navigate('/')
    
  }

  const getAccessToken = () => {
    const info = JSON.parse(localStorage.getItem('dados'))
    alert(info.acesso)
    //verificar na api se o token de acesso ainda é valido
    //faz um get no endpoint hhtps://127.0.0.1:8000/auth/users/me/
    //
    console.log(info.acesso);
    return info

  }

  const getRefreshToken = () => {
    const info = JSON.parse(localStorage.getItem('dados'))
    alert(info.refresh)
    console.log(info.refresh);
    return info
  }

  const deslogar = () => {
    //3 etapas
    //1 - limpar localstorage
    localStorage.clear()
    //2 - alterar o state setLogado
    setLogado(false)
    //3 - redirecionar para o login
    navigate('/')
  }



  return (
    <>
    
      {/* identificar a rota atual e com base nisso, exibir ou não o componente da navBar */}
      {/* chamar a navBar aqui */}
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login onClick={logar}/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/produtodetalhe/:id' element={<ProdutoDetalhe/>}/>
        <Route path='/cadastro' element={<Cadastrar/>}/>
      </Routes>
    </>
  )
}

export default App
