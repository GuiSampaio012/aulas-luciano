import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Carrinho = () => {
    const [information, setInformation] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/backPalmeiras/produtos/${id}`)
            .then((res) => {
                console.log(res.data)
                setInformation(res.data)

            })
    }, [])
    const {id} = useParams();

    

    return (
        <>
            <div className='w-screen h-screen bg-[#3D8C64]'>
                
            </div>
        </>
    )
}
export default Carrinho