import React, {Component} from "react";


const Botaocad = (props) => {
    return (
        <div>
            <button type="button" className="m-3 h-9  border border-white text-[#FFF]
             bg-[#3D8C64] p-7 rounded-full flex items-center 
             text-xl "> {props.placeholder} </button>
        </div>
    )
}
export default Botaocad;