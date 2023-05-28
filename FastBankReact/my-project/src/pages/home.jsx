import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Home() {
  let navigate = useNavigate();

    return (
      <>
        <div className=' bg-[#3D8C64] w-screen h-screen '>
          <div className=' w-[100%] h-[30%] flex justify-center items-center'>
            <p className='text-slate-100 text-center text-[8vh]'>VENHA INVESTIR COM A GENTE</p>
          </div>
          <div className=' bg-[#fff] w-[100%] h-[30%] flex justify-center items-center'>
            <p className='text-[#0C633D] text-center text-[8vh]'>CRÉDITO FÁCIL NA SUA MÃO</p>
          </div>
          <div className='w-[100%] h-[30%] flex justify-center items-center'>
            <Link className='text-slate-100 text-center text-[8vh]' to='/login'> VENHA RÁPIDO </Link>
          </div>
        </div>
      </>
    );
}
  
  export default Home;
  