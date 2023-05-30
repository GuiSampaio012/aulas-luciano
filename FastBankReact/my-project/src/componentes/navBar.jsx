import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({logado, deslogar}) => {
    const acesso = localStorage.getItem("dados")
    let chave =""
    if (acesso) {
        chave = JSON.parse(acesso).access
    }
    
    useEffect(() =>{
        console.log(chave);
        axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, {token: chave})
        .then((response) =>{
            if(response.status==200 || response.status==201){
                logado = true
            }
            else{
                logado = false 
            }
        })
    },[])
    return (
    <>
        <div className="flex justify-between w-screen bg-slate-800 p-4">
            <ul className="flex justify-around w-screen">
                <li><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/transferencia">Transferências</Link></li>
                {logado?<li><button onClick={deslogar} className="text-white">Deslogar</button></li>:
                <li><Link className="text-white" to="/login">Login</Link></li>}
                
                {/* <li><button onClick={}> Logout </button></li> */}
            </ul>    
        </div>      
    </>
    );
}
 
export default NavBar;