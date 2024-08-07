import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({dadosUSer}) => {
    const navigate = useNavigate()
    const [logado,setLogado] = useState(false)
    const acesso = localStorage.getItem("dados")
    const [palavra,setPalavra] = useState(false)
    let chave =""
    if (acesso) {
        chave = JSON.parse(acesso).access
    }
    else{
        chave = 'deu ruim'
    }

    const deslogar = () => {
        //1 - limpar localstorage
        localStorage.clear()
        //2 - alterar o state setLogado
        setLogado(false)
        console.log('deslogouuuuu')
        //3 - redirecionar para o login
        navigate('/')
    }


    useEffect(() =>{
        console.log(chave);
        axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, {token: chave})
        .then((response) =>{
            if(response.status==200 || response.status==201){
                setLogado(true)
                
            }
            else{
                setLogado(false) 
            }
        })
    },[])

    useEffect(()=>{
        if (dadosUSer!=null) {
            setPalavra(true)
        }
        else{
            setPalavra(false)
        }
    },[logado])
    
    return ( 
    <>
        <div className="flex justify-between w-screen bg-slate-800 p-4">
            <ul className="flex justify-around w-screen">
                <li><Link className="text-white" to="/produtos">Produtos</Link></li>
                {logado? <li><button onClick={deslogar} className="text-white">Deslogar</button></li>:
                <li><Link className="text-white" to="/">Login</Link></li>}
                {logado?<li><p className="text-white">bem vindo {dadosUSer}</p></li>:null}
                <li><Link className="text-white" to="/carrinho"> Carrinho</Link></li>
                {/* <li><button onClick={}> Logout </button></li> */}
            </ul>
        </div>      
    </>
    );
}
 
export default NavBar;