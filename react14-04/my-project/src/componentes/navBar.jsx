import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <>
        <div className="flex justify-between w-screen bg-slate-800 p-4">
            <ul className="flex justify-around w-screen">
                <li><Link className="text-white" to="/produtos">Produtos</Link></li>
                <li><Link className="text-white" to="/">Login</Link></li>
                <li><Link className="text-white" to="/carrinho"> Carrinho</Link></li>
                {/* <li><button onClick={}> Logout </button></li> */}
            </ul>
        </div>      
    </>
    );
}
 
export default NavBar;