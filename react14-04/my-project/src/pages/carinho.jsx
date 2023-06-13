import axios from 'axios';
import { getItem } from 'localforage';
import React, { Component, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Carrinho = ({removerCarrinho}) => {
  let car = [];
    const [information, setInformation] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [valor, setValor] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      if (localStorage.getItem('carrinho') != undefined){
        setCartItems(JSON.parse(localStorage.getItem('carrinho')))
        precoCarrinho()
      }
      
    },[])
    
    // useEffect(()=>{
    //   console.log("prod:");
    //   console.log(products)
    // }, [products])
    
    const removerItem = (productId) => {
        const atualizadoCartItems = cartItems.filter((item) => item.id !== productId);
        localStorage.setItem('carrinho', JSON.stringify(atualizadoCartItems))
        setCartItems(atualizadoCartItems);
    };
    
    const aumentarQtd = (productId) => {
        const atualizadoCartItems = cartItems.map((item) => {
          if (item.id === productId) {
            function soma(){
              var res = parseInt(item.precoU) + parseInt(item.precoU/item.qtd);
              return res;
            }
            return { ...item, qtd: item.qtd + 1, precoU: soma()};
          }
          return item;
        });
        localStorage.setItem('carrinho', JSON.stringify(atualizadoCartItems))
        setCartItems(atualizadoCartItems);
        precoCarrinho()
    };
    
    const diminuirQtd = (productId) => {
        const atualizadoCartItems = cartItems.map((item) => {
          if (item.id === productId && item.qtd > 1) {
            function subtracao(){
              var res = parseInt(item.precoU) - parseInt(item.precoU/item.qtd);
              return res;
            }
            return { ...item, qtd: item.qtd - 1, precoU: subtracao()};
          }
          return item;
        });
        localStorage.setItem('carrinho', JSON.stringify(atualizadoCartItems))
        precoCarrinho()
        setCartItems(atualizadoCartItems);
    };

    const precoCarrinho = () =>{
      let total = 0.00
      if(localStorage.getItem('carrinho') !=  undefined){
        car = JSON.parse(localStorage.getItem('carrinho'))
        {car.map((element) => {
          total= total+(parseFloat(element.precoU))
        })};
        setValor(total)
      }
    }
    
    const finalizar = () => {
        console.log('Pedido concluído!');
        const atualizadoCartItems = []
        localStorage.removeItem('carrinho')
        setCartItems(atualizadoCartItems);
        alert(`parabéns pela realização da sua compra de ${valor} reais !!!`)
        setValor(0)
        
    };

    return (
        <>
            <div className='w-screen h-screen bg-[#3D8C64]'>
                <div className='w-[100%] bg-[#D4F8E3]'>
                  <h1 className='font-bold'>Carrinho de Compras</h1>
                  <h2 className='font-medium'>Itens no Carrinho:</h2>
                  <ul className='flex flex-col justify-center items-center'>
                    {cartItems.map((item) => 
                    <>
                      <li className='flex w-[50%] rounded-lg my-[10px] items-center justify-center flex-col bg-[#3D8C64] content-center' key={item.id}>
                        <p className='mt-[10px] font-medium'>{item.nome}</p>
                        <img className='"w-40 sm:w-[300px] h-[180px] sm:h-[220px] mb-5 p-2" ' src={item.foto}/>
                        <p className='font-semibold'>esse é valor do item {item.precoU}R$</p>
                        <button className='w-[70px] my-[3px] bg-[#000] text-[#fff]' onClick={() => removerItem(item.id)}>Remover</button>
                        <button className='w-[50px] my-[3px] bg-[#000] text-[#fff]' onClick={() => diminuirQtd(item.id)}>-</button>
                        <p className='font-medium' >{item.qtd}</p>
                        <button className='w-[50px] my-[3px] bg-[#000] text-[#fff]' onClick={() => aumentarQtd(item.id)}>+</button>
                    </li>
                    </>                   
                    )}
                    <li className='flex items-center flex-col content-center'> 
                      <p>valor total = {valor}</p>
                      </li> 
                      <button className='p-3 rounded-xl text-[#FFF] my-3 bg-[#3D8C64] font-bold p-3 rounded-xl 
                      text-xl' onClick={finalizar}>Concluir Pedido</button>  
                  </ul>
                 
                </div>
            </div>
        </>
    )
}
export default Carrinho