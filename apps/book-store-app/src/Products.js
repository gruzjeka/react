import React from "react";
import { Link } from "react-router";

export default function Products(props) {
    return (<div>
        <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open the book on a separate page.</p>
        <div>
            {props.route.products.map((item) => {
                return (<Link key={item.id} to={{ pathname: `/products/${item.id}`, state: { modal: true, returnTo: props.location.pathname } }}>
                    <img style={{ margin: 10 }} src={item.src} height="100" />
                </Link>);
            })}
        </div>
        <p>
            <Link to="/cart" className="btn btn-danger">Cart</Link>
        </p>
    </div>);
}