import { defaults } from "autoprefixer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../componentes/botao";

const Login = ({onClick}) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <>
            <div className="w-[100%] h-screen flex justify-center items-center bg-[#3D8C64]">
                <div className=" rounded-lg flex justify-center items-center flex-col w-4/6 bg-[#0C633D] p-5">
                    <input onChange={(e) => setLogin(e.target.value)} className="m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none" type="text" placeholder="Login"/>
                    <input onChange={(e) => setSenha(e.target.value)} className="m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none" type="password" placeholder="Senha"/>
                    <Botao onClick={() => onClick (login,senha)} type="button"> acessar</Botao>
                    <Botao><Link to="/cadastro">cadastrar</Link></Botao>
                </div>                
            </div>
        </>
    )
}
export default Login