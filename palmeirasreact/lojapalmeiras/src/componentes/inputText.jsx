import React, {Component} from "react";

const Input = ({placeholder, onChange}) => {
    return (
        <div >
            <input onChange={onChange}  placeholder={placeholder} className=" m-3  w-4/4  border-b border-white text-slate-800 bg-[#0C633D] outline-none" />
        </div>
    )
}
export default Input;