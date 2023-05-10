import React, {Component} from "react";
import Login from "./pages/login";
import { useNavigate } from "react-router-dom";



const BotaoLoginCad = (props) => {
    let naviagte = useNavigate();
    const  goCaminho = (caminho) => {
        naviagte("/" + caminho);
        // PRODUTOS/1/AVALICOES
    }  

    return (
        <div>
            <button onClick={() => goCaminho(props.caminho)} type="button" className="m-3 w-40 h-8  border border-white text-[#FFF]
             bg-[#3D8C64] p-7 rounded-full flex items-center justify-center 
             text-xl "> {props.placeholder} </button>
            {/* <button type="button"></button> */}
        </div>
    )
}

export default BotaoLoginCad;