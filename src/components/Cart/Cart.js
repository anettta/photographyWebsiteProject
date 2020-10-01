import React, { Component } from "react";
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {RoomConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <>
<br />
<RoomConsumer>
    {value=>{
        const {cart} = value;
        if (cart.length>0){
            return (
                <React.Fragment>
                 <Title title="In Your Cart"/>
                <CartColumns />
                <br />
                <CartList value={value}/>
                <CartTotals value={value} />
                </React.Fragment>
            );
        } else {
            return <EmptyCart />;
        }
    }}
</RoomConsumer>
            </>
        )
    }
}