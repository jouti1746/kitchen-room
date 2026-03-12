import React, { use } from 'react';
import State from './State';
import OrderCard from './Cards/OrderCard';

const OrderContainer = ({loadOrders}) => {
    const orders = use(loadOrders);
   

     const handleOrder =(order)=>{
        console.log(order);
        
     }
    
    return (
        <div>
            <State orderTotal ={orders.length}></State>
       
        <section className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 py-10 gap-5'>

        <div className='md:col-span-7'>
            <h2 className='text-4xl font-bold '>Current Orders </h2>
            <div className='space-y-5'>
     
         {
            orders.map((order)=>(<OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>))
         }
         
            </div>

        </div>
        <div className='md:col-span-5 space-y-5'> 
            <h2 className='text-4xl font-bold'>Cooking Now </h2>
            <div className='shadow p-10'></div>
        </div>
            
        <div className='md:col-span-5 space-y-5'> 
            <h2 className='text-4xl font-bold '>Order Ready </h2>
            <div className='shadow p-10'></div>
        </div>
            
        </section>

        </div>

       
    );
};

export default OrderContainer;