import React, { Component, useState} from 'react';
import axios from 'axios'
import Botaocad from '../componentes/botaoCadastro';
import { Input } from 'postcss';
import InputV from '../componentes/inputText';
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const foto = "teste"
    const [data_nascimento, setData_nascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const tipo_cliente = "F"
    const [password, setPassword] = useState('');
    const dataReal = data_nascimento.re

    const cadastrar = () => {
        // essa funcão CADASTRA
        axios.post('http://127.0.0.1:8000/auth/users/', {
          nome: nome,
          cpf: cpf,
          foto_logo:foto,
          data_nascimento:data_nascimento,
          celular:celular,
          tipo_cliente:tipo_cliente,
          email:email,
          password: password
        }).then((res) =>{ 
            if(res.status==200||res.status==201) {
            localStorage.setItem('dadosCad',JSON.stringify(res.data))
                axios.post('http://127.0.0.1:8000/crud/contas/', {
                    // cliente:res.data,

                },{headers:{Authotization:` JWT ${a}`}})
                .then((res) =>{
                    console.log(res.data);
                })
            }
        })
        
        console.log('function cadastrar:');
    }
        return (
            <div className='w-screen h-screen flex justify-center bg-[#3D8C64]'>
                <div className=' flex justify-center items-center flex-col w-4/6 bg-[#0C633D] p-12'>
                    <InputV onChange={(e) => setNome(e.target.value)} placeholder="nome:" ></InputV>
                    <InputV onChange={(e) => setCpf(e.target.value)} placeholder="cpf:" ></InputV>
                    <InputV type={'date'} onChange={(e) => setData_nascimento(e.target.value)} placeholder="data de nascimento:" ></InputV>
                    <InputV onChange={(e) => setCelular(e.target.value)} placeholder="celular:" ></InputV>
                    <InputV onChange={(e) => setEmail(e.target.value)} placeholder="email:" ></InputV>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="senha:" 
                    className=" m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none"
                    ></input>
                    {/* <Botaocad  placeholder= "CADASTRO"></Botaocad> */}
                    <Botaocad onClick={cadastrar} >CADASTRO</Botaocad>
                
                </div>
            </div>
            
        );

}

export default Cadastrar;