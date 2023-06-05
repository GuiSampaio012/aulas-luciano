import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HappyPeople from "../assets/pessoasFelizes.jpg"
function Home() {
  let navigate = useNavigate();

    return (
      <>
        <div className='bg-[#3D8C64] w-[100%] h-screen '>
          <div className="w-[100%] h-[30%] flex flex-col justify-center items-center">
            <p className='text-slate-100 text-center text-[300%]'>VENHA INVESTIR COM O </p>
            <p className='text-slate-100 text-center text-[320%]'>PALMAS - BANK</p>
          </div>
          <div className="bg-[#FFF] w-[100%] h-[30%] flex justify-center items-center">
            <p className='text-[#3D8C64] text-center text-[330%]'>CRÉDITO FÁCIL NA SUA MÃO</p>
          </div>
          <div className="bg-[url('./assets/pessoasFelizes.jpg')] bg-no-repeat bg-cover bg-center w-[100%] h-[30%] flex flex-col justify-center items-center">
            <Link className='text-slate-100 text-center text-[380%] ' to='/login'> VENHA RÁPIDO </Link>
            <br/>
            <p className='font-bold text-slate-100 text-center text-[100%]'>clique acima para fazer parte do nosso time</p>
          </div>
        </div>
      </>
    );
}
  
  export default Home;
  