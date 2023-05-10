import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Home = () => {
    const [information, setInformation] = useState([])
    const dados = JSON.parse(localStorage.getItem("informations"))

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
           aqui é a home
        </div>
    )
}

export default Home