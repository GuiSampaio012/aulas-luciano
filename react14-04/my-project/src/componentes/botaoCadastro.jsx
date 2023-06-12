import React, {Component} from "react";

const Botaocad = ({children, onClick}) => {
    return (
        <div>
            <button type="button" onClick={onClick}  className=" text-[#FFF]
             bg-[#3D8C64] font-bold p-3 rounded-xl 
             text-xl "> {children} </button>
        </div>
    )
}
export default Botaocad;