import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputV from '../componentes/inputText';
import Botao from '../componentes/botao';
function Transferencia() {
  let navigate = useNavigate();
  // const transferir = () => {
  //   console.log('function logar:');

  //   // essa funcão TRANSFERE
  //   axios.post('http://127.0.0.1:8000/auth/jwt/create', {
  //     username: login,
  //     password: senha
  //   }).then(res => localStorage.setItem('dados',JSON.stringify(res.data)))
  //   navigate('/')

  // }

    return (
        <div className=' bg-[#3D8C64] w-screen h-screen '>

          <div className=' p-10 justify-center bg-[#fff] w-[100%] h-[25%] ' >
            <p className='text-center text-[#3D8C64] text-[50px]'>
              TRANSFERÊNCIAS
            </p>
            <p className=' text-center text-[#3D8C64] text-[30px]'>
              aqui você pode fazer transferências para outras contas
            </p>
          </div>

          <div className='flex justify-center items-center w-[100%] h-[70%] '>
            <div className='flex flex-col  justify-evenly bg-[#fff] w-[70%] h-[80%]'>
              <p className='text-center text-[#3D8C64] text-[30px]'>
                Qual é a conta que irá realizar a transferencia ?
              </p>
              <select name='contaPag' required="required"
                className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none">
                <option value="">Escolha a conta pagadora</option>
                <option value="valor1">Valor 1</option>
              </select>
              <p className=' text-center text-[#3D8C64] text-[30px]'>
                Que conta irá receber a transferencia ?
              </p>
              <select name='contaPag' required="required"
                className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none">
                <option value="">Escolha a conta pagadora</option>
                <option value="valor1">Valor 1</option>
              </select>
              <p className ='text-center text-[#3D8C64] text-[30px]'>
                Quanto será o valor ?
              </p>
              <input placeholder='Digite um valor' className=" h-[5%] w-[100%] border-b border-white text-slate-800 bg-[#0C633D] outline-none" />
              <div className='flex justify-center'>
                <Botao onClick={() => console.log('nadaaaa')} type="button">FAZER TRANSFERÊNCIA</Botao>
              </div>
            </div>
          </div>

        </div>
    );
}
  
  export default Transferencia;