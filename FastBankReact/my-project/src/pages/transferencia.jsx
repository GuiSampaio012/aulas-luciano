import React, { Component, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputV from '../componentes/inputText';
import Botao from '../componentes/botao';
import axios from 'axios';

function Transferencia() {

  const [infoCli, setInfoCli] = useState([])
  const [saldoR, setSaldoR] = useState('')
  const [contaPag,  setContaPag] = useState('')
  const [contaRem,  setContaRem] = useState('')
  const [tipo,  setTipo] = useState('P')
  const [saldo, setSaldo] = useState('')

  const[token, setToken] = useState('')
  const[teste, setTeste] = useState([])
  const[idCli, setIdCli] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    pegartoken()
  },[])

  useEffect(() =>{
    console.log("FOI")
    axios.get('http://127.0.0.1:8000/auth/users/me/',  {headers:{Authorization: 'JWT ' + token}}).then((response) => {
      console.log(response.data)
      axios.get(`http://127.0.0.1:8000/crud/clientes/${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((res) =>{
        console.log(res.data)
        axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((response) => {    
        console.log(response.data)
          setTeste(response['data'][0])
          console.log(teste.cliente_conta)
          setSaldoR(response['data'][0]['saldo'])
        })
      })
    })
  },[token])

  useEffect(()=>{

  },[transferencia])

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
      if(saldo > 0 && usuario_encontrado.saldo >= saldo ){
        usuario_encontrado.saldo = parseFloat(usuario_encontrado.saldo) - parseFloat(saldo)
        axios.put(`http://127.0.0.1:8000/crud/contas/${usuario_encontrado.id}`,usuario_encontrado,{headers:{Authorization: 'JWT ' + token}})
        .then((res) => {
          console.log(res.data);
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
        navigate(0)
      }
      else if(saldo <= 0){
        alert('DIGITE UM VALOR MAIOR QUE "0"') 
      }
      else{
        alert('SALDO INSUFICIENTE')
      }
    })
  }

  return (
    <div className=' bg-[#3D8C64] w-screen h-screen '>

      <div className=' p-10 justify-center flex flex-col bg-[#fff] w-[100%] h-[25%] ' >
        <p className='text-center text-[#3D8C64] text-[50px]'> R$ {saldoR}</p>
        <p className=' text-center text-[#3D8C64] text-[30px]'>
          aqui você pode fazer transferências para outras contas
        </p>
      </div>
      <div className='flex justify-center items-center w-[100%] h-[70%] '>
        <div className='rounded-[10px] flex flex-col justify-evenly bg-[#fff] w-[70%] h-[90%]'>                    
          <p className=' text-center text-[#3D8C64] text-[30px]'>
            Que conta irá receber a transferencia ?
          </p>
          <input placeholder='Digite a conta do remetente'
            className="text-[#FFF] text-center h-[8%] w-[100%] border-b border-white bg-[#0C633D] outline-none" onChange={(e) => setContaRem(e.target.value)}>
          </input>
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Quanto será o valor ?
          </p>
          <input placeholder='Digite um valor a ser enviado'onChange={(e) => (setSaldo(e.target.value))} 
            className="h-[8%] w-[100%] text-center border-b border-white text-[#FFF] bg-[#0C633D] outline-none">
          </input>
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Qual será o tipo da trasferência ?
          </p>
          <select className=" text-center h-[8%] w-[100%] border-b border-white text-[#FFF] bg-[#0C633D] outline-none" 
            onChange={(e) => (setTipo(e.target.value))}>
            <option className='text-[#FFF]' value='P'>Pix</option>
            <option className='text-[#FFF]' value='D'>Depósito</option>
            <option className='text-[#FFF]' value='T'>Transferência</option>
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