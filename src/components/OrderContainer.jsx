import React, { use } from 'react';
import State from './State';

const OrderContainer = ({loadOrders}) => {
    const orders = use(loadOrders);
    console.log(orders);
    return (
        <div>
            <State></State>
        </div>

       
    );
};

export default OrderContainer;