import React, { Component, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputV from '../componentes/inputText';
import Botao from '../componentes/botao';
import axios from 'axios';
function Transferencia({login,logado}) {
  const [infoCli, setInfoCli] = useState([])
  const [saldoR, setSaldoR] = useState('')
  const [contaPag,  setContaPag] = useState('')
  const [contaRem,  setContaRem] = useState('')
  const [tipo,  setTipo] = useState('P')

  const [saldo, setSaldo] = useState('')

  const[token, setToken] = useState('')
  const[teste, setTeste] = useState([])
  const[idCli, setIdCli] = useState('')


  useEffect(() => {
    pegartoken()
  }, [])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/crud/clientes/', {headers:{Authorization: 'JWT ' + token}})
    .then((res) =>{
        setIdCli(res['data'][0])
    })
  },[token])

  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/crud/contas/', {headers:{Authorization: 'JWT ' + token}}).then((response) => {
      //console.log(response)
      setTeste(response['data'][0])
    })
  },[token])
  
  const pegartoken = () => {
    const acesso = localStorage.getItem("dados")
    let chave =""
    if (acesso) {
        chave = JSON.parse(acesso).access
        setToken(chave)
    }
  }

  function transferencia() { 
    // essa parte da função entra no banco e seleciona os dados da conta pagadora
    let historico_transferencia = ({ valor_enviado: saldo, conta_transferencia: teste.cliente_conta, tipo: tipo, conta_remetente: contaRem})
    axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${teste.cliente_conta}`,{headers:{Authorization: 'JWT ' + token}},)
    .then((res) => {
      let usuario_encontrado = []
      usuario_encontrado.push(res.data[0])
      console.log(usuario_encontrado)
      usuario_encontrado = usuario_encontrado[0]
      
      //descontando o valor que a conta está pagando
      usuario_encontrado.saldo = parseFloat(usuario_encontrado.saldo) - parseFloat(saldo)
      axios.put(`http://127.0.0.1:8000/crud/contas/${usuario_encontrado.id}`,usuario_encontrado,{headers:{Authorization: 'JWT ' + token}})
      .then((res) => {
        console.log(res.data);

      })
    })
    // essa parte da função entra no banco e seleciona os dados da conta remetente
    axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${contaRem}`,{headers:{Authorization: 'JWT ' + token}},)
    .then((res) => {
      let remetente_encontrado = []
      remetente_encontrado.push(res.data[0])
      remetente_encontrado = remetente_encontrado[0]

      //adicionando o valor que a conta está recebendo
      remetente_encontrado.saldo = parseFloat(remetente_encontrado.saldo) + parseFloat(saldo)
      axios.put(`http://127.0.0.1:8000/crud/contas/${remetente_encontrado.id}`,remetente_encontrado,{headers:{Authorization: 'JWT ' + token}})
      .then((res) => {
        console.log(res.data);

      })
    })
    // adiconando a trasação para o banco
    axios.post('http://127.0.0.1:8000/crud/transferencia/', historico_transferencia)
}

  useEffect(() => {
    // buscando o cliente da conta pelo seu id
    axios.get(`http://127.0.0.1:8000/crud/clientes/?filtro=${login}`)
    .then((res) => {
        let cliente_encontrado = []
        cliente_encontrado.push(res.data[0])
        cliente_encontrado = cliente_encontrado[0]
        setInfoCli(cliente_encontrado.id)
        console.log(cliente_encontrado.id)
        setContaPag(cliente_encontrado.id)
    })
    
  }, [])

  useEffect(() => {
    // essa parte da função entra no banco e seleciona os dados da conta pagadora
    axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${contaPag}`)
    .then((res) => {
      let usuario_encontrado = []
      usuario_encontrado.push(res.data[0])
      usuario_encontrado = usuario_encontrado[0]
      console.log(usuario_encontrado)
      setSaldoR(usuario_encontrado.saldo)
      console.log(saldoR)
    })  
  },[contaPag])



// useEffect(() => {
//   axios.get("http://127.0.0.1:8000/backPalmeiras/produtos")
//       .then((res) => {
//           console.log(res.data)
//           setInformation(res.data)

//       })
// }, [])



  return (
    <div className=' bg-[#3D8C64] w-screen h-screen '>

      <div className=' p-10 justify-center flex flex-col bg-[#fff] w-[100%] h-[25%] ' >
        <p className='text-center text-[#3D8C64] text-[50px]'> R$ {saldoR}</p>
        <p className=' text-center text-[#3D8C64] text-[30px]'>
          aqui você pode fazer transferências para outras contas
        </p>
      </div>
      <div className='flex justify-center items-center w-[100%] h-[70%] '>
        <div className='flex flex-col  justify-evenly bg-[#fff] w-[70%] h-[80%]'>                    
          <p>esta é sua conta: {contaPag}</p>
          {/* <p className='text-center text-[#3D8C64] text-[30px]'>
            Qual é a conta que irá realizar a transferencia ?
          </p>
          <input className="h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" onChange={(e) => setContaPag(e.target.value)}></input> */}
          <p className=' text-center text-[#3D8C64] text-[30px]'>
            Que conta irá receber a transferencia ?
          </p>
          <input className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" onChange={(e) => setContaRem(e.target.value)}></input>
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Quanto será o valor ?
          </p>
          <input onChange={(e) => (setSaldo(e.target.value)) } placeholder='Digite um valor' 
            className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" />
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Qual será o tipo da trasferência ?
          </p>
          <select className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" 
            onChange={(e) => (setTipo(e.target.value))}>
            <option value='P'>Pix</option>
            <option value='D'>Depósito</option>
            <option value='T'>Transferência</option>
          </select>
          <div className='flex justify-center'>
            {/* fazer 'if para verificar se a conta pagadora tem saldo necessário' */}
            <Botao onClick={transferencia} type="button">FAZER TRANSFERÊNCIA</Botao>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Transferencia;