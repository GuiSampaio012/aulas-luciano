import React, { Component, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputV from '../componentes/inputText';
import Botao from '../componentes/botao';
import axios from 'axios';
function Transferencia() {
  let navigate = useNavigate();

  const [contaPag,  setContaPag] = useState('')
  const [contaRem,  setContaRem] = useState('')
  const [saldo, setSaldo] = useState('')
  const [information, setInformation] = useState([])
  const [informationCli, setInformationCli] = useState([])
  const [id, setId] = useState(9)
  function transferencia() {
    
    let historico_transferencia = { valor_enviado: saldo, conta_transferencia: contaPag, conta_remetente: contaRem, tipo: 'Pix' }
    console.log(historico_transferencia)
    axios.post('http://127.0.0.1:8000/crud/transferencia/', historico_transferencia)

  }

  const dados = JSON.parse(localStorage.getItem("dados"))

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/crud/contas/")
      .then((res) => {
        setInformation(res.data)
    
    axios.get(`http://127.0.0.1:8000/crud/contas/${id}`)   
    .then((res) => {
      setInformationCli(res.data)
    })
  })
    
  }, [])

  return (
    <div className=' bg-[#3D8C64] w-screen h-screen '>

      <div className=' p-10 justify-center flex flex-col bg-[#fff] w-[100%] h-[25%] ' >
        <p className='text-center text-[#3D8C64] text-[50px]'key={information.id}> R$ {information.saldo}</p>
        <p className=' text-center text-[#3D8C64] text-[30px]'>
          aqui você pode fazer transferências para outras contas
        </p>
      </div>

      <div className='flex justify-center items-center w-[100%] h-[70%] '>
        <div className='flex flex-col  justify-evenly bg-[#fff] w-[70%] h-[80%]'>
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Qual é a conta que irá realizar a transferencia ?
          </p>
          <input className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" onChange={(e) => (setContaPag(e))}></input>
          <p className=' text-center text-[#3D8C64] text-[30px]'>
            Que conta irá receber a transferencia ?
          </p>
          <input key={information.id} className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" onChange={(e) => (setContaRem(e))}></input>
          <p className='text-center text-[#3D8C64] text-[30px]'>
            Quanto será o valor ?
          </p>
          <input onChange={(e) => (setSaldo(e)) } placeholder='Digite um valor' className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" />
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