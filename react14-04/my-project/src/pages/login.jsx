import { defaults } from "autoprefixer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../componentes/botao";

const Login = ({onClick}) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <>
            <div className="flex justify-center items-center">
                <div className=" flex flex-col w-1/2 bg-gray-300 p-3">
                    <input onChange={(e) => setLogin(e.target.value)} className="p-2 m-3 bg-pink-500" type="text" placeholder="Login"/>
                    <input onChange={(e) => setSenha(e.target.value)} className="p-2 m-3 bg-pink-500" type="password" placeholder="Senha"/>
                    <Botao onClick={() => onClick (login,senha)} type="button"> acessar</Botao>
                    <Botao><Link to="/cadastro">cadastrar</Link></Botao>
                </div>                
            </div>
        </>
    )
}
export default Login