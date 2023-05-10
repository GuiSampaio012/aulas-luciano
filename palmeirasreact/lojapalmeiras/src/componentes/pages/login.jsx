import React, { Component, useState} from 'react';
import Palmeiras from '../imagens/palmeiras-logo-4.png'
import Input from '../inputText';
import BotaoLoginCad from '../botaoLoginCad';
import { useNavigate } from 'react-router-dom';
import BotaoLogin from '../botaoLogin copy';
import Cadastrar from './cadastrar';

const Login = () => {
    const[login, setLogin] = useState('')
    const[senha, setSenha] = useState('')

    const navigate = useNavigate()

    const logar = () =>{
        // requisição POST enviando login e senha
        // caso login seja efetuado, retornará 2 tokens
        // access token - 5min
        // refresh token - 24h


        // se os 3 tokens expirarem, oq fazer?
        // redireciionar o usuario para a tela de login
        // e fazer o login novamente

        localStorage.setItem("dados", JSON.stringify({login: login, senha: senha}))
        navigate('/produtos')
        console.log("logou...")  
        console.log(login)  

    }

    const esqueci = () =>{
        console.log('esqueci minha senha...');
    }
        return (
            
            <div className='w-screen h-screen flex justify-center items-center bg-[#3D8C64]'>
                <div className='rounded-lg flex  justify-center items-center flex-col w-4/6 bg-[#0C633D] p-12'>
                    <img src={Palmeiras} className='w-2/4' />
                    <Input onChange={(e) => setLogin(e.target.value)} placeholder="email:" ></Input>
                    <Input onChange={(e) => setSenha(e.target.value)}placeholder="senha:" ></Input>
                    <BotaoLogin onClick={logar} placeholder= "Login"></BotaoLogin>
                    <BotaoLoginCad caminho="cadastrar" placeholder= "Cadastrar"></BotaoLoginCad>
                </div>
            </div>            
        );

}

export default Login;