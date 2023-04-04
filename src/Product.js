import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'


  
const Product = ({ id, title, image, price, rating }) => {
  const [{cart}, dispatch] = useStateValue();

  

  const addToCart =() => {
     
    // dispatchh item into data layer
         dispatch({
             type: 'ADD_TO_CART',
             item: {
              id:id,
              title: title,
              image:image, 
              price: price,
              rating:rating,
             }
         })
  }
  
  return (
    <div className='Product'>
<div className="Product__info">
  <p>{title}</p>
  <p className="Product__price">
    <small>₹ </small>
<strong>{price}</strong>
    </p>  
    <div className="Product__rating">
        {Array(rating).fill().map((_, i)=> (
           <p><span>🌟</span></p>
        ))}
        
        
       
    </div>
</div>
<img src={image} alt="" />
  <button onClick={addToCart}> Add to Cart</button>
    </div>
  )
}

export default Product