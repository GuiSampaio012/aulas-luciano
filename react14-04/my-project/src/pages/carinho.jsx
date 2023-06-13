import axios from 'axios';
import { getItem } from 'localforage';
import React, { Component, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Carrinho = ({removerCarrinho}) => {
    const [information, setInformation] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [valorTotal, setValorTotal] = useState('');

    useEffect(()=>{
      if (localStorage.getItem('carrinho') != undefined){
        setCartItems(JSON.parse(localStorage.getItem('carrinho')))
      }
      
    },[])
    
    useEffect(()=>{
      console.log("prod:");
      console.log(products)
    }, [products])
    
    // const addItemToCart = (product) => {
    //     const existingItem = cartItems.find((item) => item.id === product.id);
    //     if (existingItem) {
    //       const updatedCartItems = cartItems.map((item) => {
    //         if (item.id === product.id) {
    //           return { ...item, quantity: item.quantity + 1 };
    //         }
    //         return item;
    //       });
    //       setCartItems(updatedCartItems);
    //     } else {
    //       setCartItems([...cartItems, { ...product, quantity: 1 }]);
    //     }
    // };
    
    const removeItemFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        localStorage.setItem('carrinho', JSON.stringify(updatedCartItems))
        setCartItems(updatedCartItems);
    };
    
    
    const incrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === productId) {
            function soma(){
              var res = parseInt(item.precoU) + parseInt(item.precoU/item.qtd);
              return res;
            }
            return { ...item, qtd: item.qtd + 1, precoU: soma()};
          }
          return item;
        });
        localStorage.setItem('carrinho', JSON.stringify(updatedCartItems))
        setCartItems(updatedCartItems);
    };
    
    const decrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === productId && item.qtd > 1) {
            function subtracao(){
              var res = parseInt(item.precoU) - parseInt(item.precoU/item.qtd);
              return res;
            }
            return { ...item, qtd: item.qtd - 1, precoU: subtracao()};
          }

          return item;
        });
        localStorage.setItem('carrinho', JSON.stringify(updatedCartItems))
        setCartItems(updatedCartItems);
    };
    
    const checkout = () => {
        console.log('Pedido concluído!');
        const updatedCartItems = []
        localStorage.removeItem('carrinho')
        setCartItems(updatedCartItems);
        alert('parabéns pela realização da sua compra!!!')
        
    };

    const darValor = () => {
      {cartItems.map((item) =>
        setValorTotal(item.precoU + item.precou)
      )}
    };

    return (
        <>
            <div className='w-screen h-screen bg-[#3D8C64]'>
                <div className='w-[100%] bg-[#D4F8E3]'>
                  <h1 className='font-bold'>Carrinho de Compras</h1>
                  <h2 className='font-medium'>Itens no Carrinho:</h2>
                  <ul className=''>
                    {cartItems.map((item) => 
                    <li className='flex items-center flex-col content-center' key={item.id}>
                        <p className='mt-[10px] font-medium'>{item.nome}</p>
                        <img src={item.foto}/>
                        <p className='font-semibold'>esse é valor do item {item.precoU}R$</p>
                        <button className='w-[70px] my-[3px] bg-[#000] text-[#fff]' onClick={() => removeItemFromCart(item.id)}>Remover</button>
                        <button className='w-[50px] my-[3px] bg-[#000] text-[#fff]' onClick={() => decrementQuantity(item.id)}>-</button>
                        <p className='font-medium' >{item.qtd}</p>
                        <button className='w-[50px] my-[3px] bg-[#000] text-[#fff]' onClick={() => incrementQuantity(item.id)}>+</button>
                    </li>
                    )}
                    {/* <li className='flex items-center flex-col content-center'> 
                      <p>valor total = {valorTotal}</p>
                    </li> */}
                  </ul>
                  <button onClick={checkout}>Fechar Pedido</button>
                </div>
            </div>
        </>
    )
}
export default Carrinho