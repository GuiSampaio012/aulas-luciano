import React, { Component, useState} from 'react';
import Palmeiras from '../imagens/palmeiras-logo-4.png'
import Input from '../inputText';
import Botao from '../botaoCadastro';

const Cadastrar = () => {
        return (
            <div className='w-screen h-screen flex justify-center items-center bg-[#3D8C64]'>
                <div className='rounded-lg flex  justify-center items-center flex-col w-4/6 bg-[#0C633D] p-12'>
                    <img src={Palmeiras} className='w-2/4' />
                    <Input placeholder="nome:" ></Input>
                    <Input placeholder="sobrenome:" ></Input>
                    <Input placeholder="email:" ></Input>
                    <Input placeholder="senha:" ></Input>
                    <Input placeholder="repita a senha:" ></Input>
                    <Botao placeholder= "CADASTRO"></Botao>
                
                </div>
            </div>
            
        );

}

export default Cadastrar;