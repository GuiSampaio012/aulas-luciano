import React, { Component, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Voltar from '../Voltar';
const ProdutoDetalhe = () => {
    
    const {id} = useParams();
    // let navigate = useNavigate();
    return (
        <>
            <Voltar></Voltar>
            <h1 className='text-black'>Produto {id} </h1>
            
            <div className='w-screen h-screen bg-[#3D8C64]'>

            </div>
        </>
    )
}
export default ProdutoDetalhe;