import React from "react";

const Botao = ({children, onClick, type}) => {
    return ( 
        <>
            <button type={type} onClick={onClick} className="p-3 rounded-xl
             text-[#FFF] mt-3
             bg-[#3D8C64] font-bold p-3 rounded-xl 
             text-xl "> {children}
            </button>
        </>
     );
}
 
export default Botao;