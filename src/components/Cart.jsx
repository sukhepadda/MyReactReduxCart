import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
    const { cartItems, subTotal, tax, shipping, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });
        dispatch({ type: "calculatePrice" });

    };
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });
    };
    const deleteHandler = (id) => {
        dispatch({
            type: "deleteHandler",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });

    };


    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => (

                            <CartItem
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                id={i.id}
                                key={i.id}
                                decrement={decrement}
                                increment={increment}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    ) : <h1>NO ITEMS YET</h1>
                }
            </main>
            <aside>
                <h2>SubTotal: ₹{subTotal}</h2>
                <h2>Shipping: ₹{shipping}</h2>
                <h2>Tax: ₹{tax}</h2>
                <h2>Total: ₹{total}</h2>
            </aside>
        </div>
    )
}

export default Cart