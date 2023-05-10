import React, { Component } from 'react'
function Cep (){

    return (
        <>
          <input type='text' className='border-blue-500 border-2 rounded-lg
          outline-none'
          placeholder='CEP' maxLength={8} onChange={(e) => 
          setCep(e.target.value)}/>
    
          <input type='text' className='border-blue-500 border-2 rounded-lg
          outline-none' placeholder={props.rua} value={rua}/> 
    
          <input type='text' className='border-blue-500 border-2 rounded-lg
          outline-none' placeholder={bairro} value={bairro}/> 
    
          <input type='text' className='border-blue-500 border-2 rounded-lg
          outline-none' placeholder={cidade} value={cidade}/>
    
          <input type='text' className='border-blue-500 border-2 rounded-lg
          outline-none'placeholder={estado} value={estado}/>
    
          <p>
            {endereco}
          </p>
        </>
    )
}
export default Cep
