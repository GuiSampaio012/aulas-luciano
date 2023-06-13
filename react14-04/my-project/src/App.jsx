import { useEffect, useState } from 'react'
import Login from './pages/login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './componentes/navBar'
import axios from 'axios'
import Carrinho from './pages/carinho'
import Produtos from './pages/produtos'
import ProdutoDetalhe from './pages/produtoDetalhe'
import Cadastrar from './pages/cadastrar'
import { info } from 'autoprefixer'

function App({}){
  const [logado, setLogado] = useState(false)
  const [dadosUSer, setDadosUSer] = useState('')
  const navigate = useNavigate()

  const logar = (login, senha) => {
    // essa funcão LOGA
    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
      email: login,
      password: senha
    }).then(res => {
      localStorage.setItem('dados',JSON.stringify(res.data))
      navigate('/produtos')
    })
    .catch((res)=>{alert('deu errado, verifique seu email e senha e tente novamente...')})

    console.log('function logar:');
  }

  useEffect(()=>{
    if(localStorage.getItem('dados')){
      axios.get('http://127.0.0.1:8000/auth/users/me/',  {headers:{Authorization: 'JWT ' + JSON.parse(localStorage.getItem('dados')).access}})
      .then((response) => {
          console.log(response.data.username)
          setDadosUSer(response.data.username)
          console.log(response.data)
      }).catch((res)=>{
        console.log(res);
        refresh()
      })
    }
    console.log('deu ruim')
  },[])

  const refresh = () => {
    const token = JSON.parse(localStorage.getItem('dados'))
    axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {
      refresh: token.refresh
    }).then(res => localStorage.setItem('dados', JSON.stringify({...token, access: res.data.access})))
  }

//=====================carrinho====================
  const [mexeuCarrinho, setMexeuCarrinho] = useState(false)
  const comprar = (idProduto, fotoProduto, precoProduto, nomeProduto) => {
    let itens = [{ 'id': idProduto,'nome':nomeProduto, 'qtd': 1, 'foto': fotoProduto, 'precoU': precoProduto }]
    let itemExistente = true
    if (localStorage.getItem('carrinho') != undefined) {
      itens = JSON.parse(localStorage.getItem('carrinho'))
      itens.map((item) => {
        if (item.id == idProduto) {
          function soma(){
            var res = parseInt(item.precoU) + parseInt(item.precoU/item.qtd);
            return res;
          }
          item.precoU = soma()  
          item.qtd += 1
          itemExistente = false
          alert('item adiconado ao carrinho')
        }
      })
      // console.log(itemExistente)
      if (itemExistente) {
        // console.log('itemNovo')
        itens = itens.concat({ 'id': idProduto,'nome':nomeProduto, 'qtd': 1, 'foto': fotoProduto, 'precoU': precoProduto })
        alert('item adiconado ao carrinho')
      }
    }
    console.log(itens)
    localStorage.setItem('carrinho', JSON.stringify(itens))
    alert('item adiconado ao carrinho')
    setMexeuCarrinho(!mexeuCarrinho)
  }

  const removerCarrinho = (idProduto) => {
    if (localStorage.getItem('carrinho') != undefined) {
      let itens = JSON.parse(localStorage.getItem('carrinho'))
      let newItens = []
      itens.map((item) => {
        if (item.id == idProduto) {
          item.qtd -= 1
        }
        if (item.qtd > 0) {
          newItens.push(item)
        }
      })
      localStorage.setItem('carrinho', JSON.stringify(newItens))
      setMexeuCarrinho(!mexeuCarrinho)

    }
  }

  // const [itensCarrinho, setItensCarrinho] =useState(0)

  const [qtdItemsCarrinho, setQtdItemsCarrinho] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('carrinho') != undefined) {
      let qtdCarrinho = 0
      let itens = JSON.parse(localStorage.getItem('carrinho'))
      itens.map((item) => {
        qtdCarrinho += item.qtd
      })
      console.log(qtdCarrinho)
      setQtdItemsCarrinho(qtdCarrinho)
    }
  }, [mexeuCarrinho])
//=============================fim carrinho============================


  return (
    <>
    
      {/* identificar a rota atual e com base nisso, exibir ou não o componente da navBar */}
      {/* chamar a navBar aqui */}
      {window.location.pathname == '/' || window.location.pathname == '/cadastro'? null : <NavBar dadosUSer={dadosUSer}/>}
      <Routes>
        <Route path='/' element={<Login onClick={logar}/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/produtodetalhe/:id' element={<ProdutoDetalhe comprar={comprar}/>}/>
        <Route path='/cadastro' element={<Cadastrar removerCarrinho={removerCarrinho}/>}/>
      </Routes>
    </>
  )
}

export default App
