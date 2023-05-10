import React, { Component, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Voltar = () => {
    
    const {id} = useParams();
    let navigate = useNavigate();
    return (
        <>
            <button className='text-red-500' onClick={() => navigate(-1)}> voltar</button>
        </>
    )
}
export default Voltar;