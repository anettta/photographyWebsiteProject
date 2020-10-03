import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';


export default function CartTotals({value,history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return <React.Fragment>
  
        <div class="container">
            <div class="row">
                <div className="col-10">
                    <Link to="/">
                        <button className="btn-clear-cart" type="button"
                        onClick={()=>clearCart()}>clear cart</button>
                          <br />
                    </Link>
                  
                    <h5>
                        <span className="text-title">
                            subtotal : </span>
                        <strong>$ {cartSubTotal}</strong>
                      
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax : </span>
                        <strong>$ {cartTax}</strong>
                      
                    </h5>
                    <h5>
                        <span className="text-title">
                            total : </span>
                        <strong>$ {cartTotal}</strong>
                      
                    </h5>
                    <PayPalButton total={cartTotal} clearCart={clearCart}
                    history={history}/>
                </div>
            </div>
        </div>
  
    </React.Fragment>;
}
