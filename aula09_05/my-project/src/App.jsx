import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Cep from './componentes/cep'

function App(props) {
  const [count, setCount] = useState(0)
  const [endereco, setEndereco]=useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')

  useEffect(() =>{
    if (cep.length == 8) {
      consumirApi();
    }
    else if (cep.length ==0){
      setRua('')
      setCidade('')
      setBairro('')
      setEstado('')
    }
  }, [cep])

  

  const consumirApi = () =>{
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) =>{
        setEndereco(res.data.logradouro + ' ' + res.data.bairro)
        setRua(res.data.logradouro)
        setBairro(res.data.bairro)
        setCidade(res.data.localidade)
        setEstado(res.data.uf)
        console.log(res)
        console.log({endereco})
      })  
  }

  return (
    <>
      <Cep/>
    </>
  )
}

export default App
