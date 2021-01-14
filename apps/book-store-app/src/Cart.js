import React from "react";
import { Link } from "react-router";

export default function Cart(props) {
    const cartItems = props.route.cartItems;
    return (<div>
        {(cartItems.length == 0) ? <p>Your cart is empty</p> : ""}
        <ul>
            {cartItems.map((item) => {
                return <li key={item.id}>
                    {item.title}
                </li>;
            })}
        </ul>
        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
        <Link to="/" className="btn btn-info">Home</Link>
    </div>);
}