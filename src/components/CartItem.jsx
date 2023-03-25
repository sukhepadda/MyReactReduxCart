import React from 'react'
import { AiFillDelete } from "react-icons/ai"

function CartItem({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) {
  return (
    <div className='cartItem'>
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>

      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  )
}

export default CartItem