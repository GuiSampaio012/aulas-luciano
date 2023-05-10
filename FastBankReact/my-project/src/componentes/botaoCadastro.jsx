import React, {Component} from "react";


const Botaocad = (props) => {
    return (
        <div>
            <button type="button" className=" text-[#FFF]
             bg-[#3D8C64] font-bold p-3 rounded-xl 
             text-xl "> {props.placeholder} </button>
        </div>
    )
}
export default Botaocad;