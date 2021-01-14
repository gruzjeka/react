import React from "react";
import { Link } from "react-router";

export default function Product(props) {
    const productId = props.params.id;
    const product = props.route.products[productId];
    if (!product) {
        return new Error('product not found');
    }

    const buyProduct = (e) => {
        props.route.addToCart(productId);
    };

    return (<div>
        <img src={product.src} style={{ height: '80%' }} />
        <p>{product.title}</p>
        <Link className="btn btn-primary" onClick={buyProduct} to={{ pathname: '/cart', state: { productId } }}>Buy</Link>
    </div>);
}