import { defaults } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../componentes/botao";
import Arvores from "../assets/images-removebg-preview.png"
import { useNavigation } from "react-router-dom";
import axios from "axios";

const Login = ({onClick}) => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    return (
       
        <div className='w-screen h-screen flex justify-center items-center bg-[#3D8C64]'>
            <div className='rounded-lg flex justify-center items-center flex-col w-4/6 bg-[#0C633D] p-5'>
                <img src={Arvores} className='w-[250px] h-[180px]' />
                <input onChange={(e) => setLogin(e.target.value)} className=" m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none" 
                type="text" placeholder="Login"/>
                <input onChange={(e) => setSenha(e.target.value)} className=" m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none" 
                type="password" placeholder="Senha"/>
                <Botao onClick={() => onClick (login,senha)} type="button"> acessar</Botao>
                <button className=" text-[#FFF]
                bg-[#3D8C64] font-bold p-3 rounded-xl 
                text-xl mt-3" onClick={()=>navigate("/cadastro")}>cadastrar</button>
            </div>                
        </div>
       
    )
}
export default Login