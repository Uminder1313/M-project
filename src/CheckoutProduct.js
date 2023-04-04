import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating, i}) => {
  const [{cart}, dispatch] = useStateValue();
    const removeFromCart=() =>{
       
        // remove the items
          dispatch({
            type:'REMOVE_FROM_CART',
             id:id,
          })
    }
  
    return (
    <div key = {i}className='checkProduct'>

     <img className='checkProduct__image' src={image}/>
    
    <div className='checkProduct__info'>
      <p className='checkProduct__title'>{title}</p>
      <p className='checkProduct__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='checkProduct__rating'>
      {Array(rating).fill().map((_, i)=> (
           <p>🌟</p>
        ))}
      </div>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
    </div>
    
  )
}

export default CheckoutProduct