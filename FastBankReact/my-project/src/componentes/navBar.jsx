import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({logado, deslogar}) => {
    return ( 
    <>
        <div className="flex justify-between w-screen bg-slate-800 p-4">
            <ul className="flex justify-around w-screen">
                <li><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/transferencia">Transferências</Link></li>
                {logado == true?<li><button onClick={deslogar} className="text-white">Deslogar</button></li>:
                <li><Link className="text-white" to="/login">Login</Link></li>}
                
                                 
                
                {/* <li><button onClick={}> Logout </button></li> */}
            </ul>    
        </div>      
    </>
    );
}
 
export default NavBar;