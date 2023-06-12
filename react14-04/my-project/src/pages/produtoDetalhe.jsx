import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const ProdutoDetalhe = () => {
    const [information, setInformation] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/backPalmeiras/produtos/${id}`)
            .then((res) => {
                console.log(res.data)
                setInformation(res.data)

            })
    }, [])
    const {id} = useParams();
  
    const [carrinhoReal, setCarrinhoReal] = useState([])

    // let navigate = useNavigate();
    return (
        <>
            <div className='w-[100%] flex justify-center items-center h-screen bg-[#3D8C64]'>
                <div className=' w-[50%] rounded-lg h-[50%] flex flex-col justify-center items-center bg-[#80CBA7] '>
                    <h1 className='text-black'>Produto {information.nome} </h1>
                    <img className=' w-40 sm:w-[300px] h-[180px] sm:h-[220px] mb-5 p-2' src={information.foto}/>
                    <div>{information.preco}</div>
                    <button  className=' border border-white rounded-xl bg-white w-["100px"] h-["100px"]'> adiconar ao carrinho</button>
                </div>
            </div>
        </>
    )
}
export default ProdutoDetalhe;