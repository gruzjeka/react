import React from "react";

export default function Checkout(props) {
    const count = props.route.cartItems.length;
    return (<div>
        <h1>Invoice</h1>
        <table className="table table-bordered">
            <tbody>
                {props.route.cartItems.map((item) => {
                    return <tr key={item.id}>
                        <td>
                            {item.title}
                        </td>
                    </tr>;
                })}
            </tbody>
        </table>
        <p>Total: {count}</p>
    </div>);
}