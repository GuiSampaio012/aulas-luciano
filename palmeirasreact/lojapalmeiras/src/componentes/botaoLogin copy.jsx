import React, {Component} from "react";
import Login from "./pages/login";
import { useNavigate } from "react-router-dom";



const BotaoLogin = ({placeholder, onClick }) => {

 

    return (
        <div>
            <button type="button" className="m-3 w-40 h-8  border border-white text-[#FFF]
             bg-[#3D8C64] p-7 rounded-full flex items-center justify-center 
             text-xl " onClick={onClick}> {placeholder} </button>
            {/* <button type="button"></button> */}
        </div>
    )
}

export default BotaoLogin;