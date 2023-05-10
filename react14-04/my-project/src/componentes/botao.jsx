import React from "react";

const Botao = ({children, onClick, type}) => {
    return ( 
        <>
            <button type={type} onClick={onClick} className="p-3 rounded-xl
             bg-pink-500 text-white font-bold mt-2"> {children}
            </button>
        </>
     );
}
 
export default Botao;