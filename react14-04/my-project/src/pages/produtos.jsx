import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Produtos = () => {
    const [information, setInformation] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/backPalmeiras/produtos")
            .then((res) => {
                console.log(res.data)
                setInformation(res.data)

            })
    }, [])


    let navigate = useNavigate();
    return (
        <div className='bg-[#3D8C64] h-screen'>
            <h1 className='text-black'>
                Listar Produtos
            </h1>


            <div className='container m-auto grid grid-cols-3 gap-2 sm:gap-4 px-2'>
                {information.map((information) => (
                    <>
                        <div className='bg-[#D4F8E3] rounded-lg sm:w-fit' key={information.id}>
                            <img className='w-40 sm:w-[300px] h-[180px] sm:h-[220px] mb-5 p-2' src={information.foto} alt="" />
                            <h3 className='bg-[#A4D2BC] w-full'>{information.nome}</h3>
                            <div className="bg-red-500 w-full h-6 ">
                            <button onClick={() => navigate(`/produtodetalhe/${information.id}`)}>
                                Comprar
                            </button>
                            </div>
                        </div>

                    </>
                ))}
            </div>


            <Link to="/produtodetalhe/2" className="bg-blue-500 rounded-xl">Produto2</Link>
        </div>
    )
}

export default Produtos