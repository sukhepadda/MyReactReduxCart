import React from 'react';

function ProductCard({imgSrc, name, price, id, handler}) {
    return (
        <div className='productCard'>
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>₹{price} </h4>
            <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
        </div>
    )
}

export default ProductCard