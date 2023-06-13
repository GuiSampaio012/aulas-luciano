import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import Botaocad from '../componentes/botaoCadastro';
import InputV from '../componentes/inputText';
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [semiSenha, setSemiSenha] = useState('');
    const [token, setToken] = useState('')
    const [teste, setTeste] = useState([])

    useEffect(() => {
        pegartoken()
    }, [])

    const pegartoken = () => {
        const acesso = localStorage.getItem("dados")
        let chave = ""
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
    }



    const cadastrar = () => {
        // essa funcão CADASTRA
        if (password == semiSenha) {
            axios.post('http://127.0.0.1:8000/auth/users/', {
                nome: nome,
                email: email,
                password: password
            }).then((res) => {
                alert("Cadastrado com sucesso, vamos te redirecionar para efetuar o login.")
                navigate("/")
            })
            console.log('function cadastrar:');
        }
        else {
            alert('as senhas não estão iguais')
        }

    }



    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#3D8C64]'>
            <div className='rounded-lg flex  justify-center items-center flex-col w-4/6 bg-[#0C633D] p-12'>
                <InputV onChange={(e) => setNome(e.target.value)} placeholder="nome:" ></InputV>
                <InputV onChange={(e) => setEmail(e.target.value)} placeholder="email:" ></InputV>
                <InputV onChange={(e) => setPassword(e.target.value)} placeholder="senha:" ></InputV>
                <InputV onChange={(e) => setSemiSenha(e.target.value)} placeholder="repita a senha:" ></InputV>
                <Botaocad onClick={cadastrar}>CADASTRO</Botaocad>
            </div>
        </div>

    );

}

export default Cadastrar;