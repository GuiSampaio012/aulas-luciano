import React, { Component, useState} from 'react';

import Botaocad from '../componentes/botaoCadastro';
import { Input } from 'postcss';
import InputV from '../componentes/inputText';

const Cadastrar = () => {
        return (
            <div className='w-screen h-screen flex justify-center items-center bg-[#3D8C64]'>
                <div className='rounded-lg flex  justify-center items-center flex-col w-4/6 bg-[#0C633D] p-12'>
                    <InputV placeholder="nome:" ></InputV>
                    <InputV placeholder="sobrenome:" ></InputV>
                    <InputV placeholder="email:" ></InputV>
                    <InputV placeholder="senha:" ></InputV>
                    <InputV placeholder="repita a senha:" ></InputV>
                    <Botaocad placeholder= "CADASTRO"></Botaocad>
                
                </div>
            </div>
            
        );

}

export default Cadastrar;