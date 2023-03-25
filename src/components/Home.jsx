import React from 'react'
import ProductCard from './ProductCard'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg";
const img2 = "https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg";

function Home() {
    const productList = [
        {
            name: "Mac Book",
            price: 120000,
            imgSrc: img1,
            id: "1",
        },
        {
            name: "Iphone",
            price: 60000,
            imgSrc: img2,
            id: "2",
        },
        {
            name: "Fake Iphone",
            price: 600,
            imgSrc: img2,
            id: "3",
        }
    ];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({type:"addToCart", payload:options})
        dispatch({type: "calculatePrice"})
        toast.success("Added to Card");
    };
    return (
        <div className='home'>
            {
                productList.map((i) => (

                    <ProductCard
                        key={i.id}
                        imgSrc={i.imgSrc}
                        name={i.name}
                        price={i.price}
                        id={i.id}
                        handler={addToCartHandler}
                    />
                ))
            }
        </div>
    )
}
export default Home