import React, {useState, useEffect} from 'react'
import './Payment.css' 
import  {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link , useNavigate} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer'
import axios from './axios'


const Payment = () => {
  const [{cart, user}, dispatch] = useStateValue()
  const navigate = useNavigate ();

  const stripe = useStripe()
  const elements = useElements()

   
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(" ")
  const [error, setError] = useState(null)
  const  [disabled, setDisabled] = useState(true)
  const  [clientSecret, setClientSecret] = useState(true)
  
  useEffect(() => {
       const getClientSecret = async () =>{
       const response = await axios ({
        method: 'post',
        url: `/payments/create?Total = ₹ {getCartTotal(cart) * 100}`
       })

       setClientSecret(response.data.clientSecret)
       }

       getClientSecret()
  }, [cart])
  
  console.log('The Secret is >>>', clientSecret)
  
  const handleSubmit = async (event) => {
          event.preventDefault()
          setProcessing(true)
          

         const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method :{
            card: elements.getElement(CardElement)
          }
         }).then(({paymentIntent}) => {
          // paymentIntent = payment confirmation 

          setSucceeded(true)
          setError(null)
          setProcessing(false)

          navigate.replace('/orders')
         })
  }

  const handleChange = event => {
 // listen for changes in card 
 setDisabled(event.empty)
 setError(event.error ? event.error.message: " ")
  }

  return (
    <div className='payment'>

     <div className='payment__container'>

      <h1>
        Checkout (<Link to ='/checkout'>{cart.length} items</Link>)
      </h1>
         {/* Payment-section -delivery address */}
            <div className='payment__section'>
             
             <div className='payment__title'>
              <h3>Delivery Address</h3>
              
             <div className='payment__address'>
                <p>{!user ? 'Guest' : user.email}</p>
                <p>123, RamBhawan</p>
                <p>Morinda, Distt. Ropar</p>
             </div>
             </div>

            </div>
         
         {/* payment-section-- Review Items */}
         <div className='payment__section'>
         <div className='payment__title'>
           <h3>Review items and Delivery</h3>
         </div>
              <div className='payment__items'>
                {cart.map(item => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                ))}
              </div>
         </div>
         
         
         
         {/* Payment-section --- Payment method */}
        <div className='payment__section'>
         <div>
          <h3>Payment Method</h3>
         </div>
             <div className='payment__details'>
              {/* Stripe Functionality */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>


                <div className='payment__priceContainer'>
                   <CurrencyFormat
                      renderText={(value) => (
                        <h3>Order Total : {value}</h3>
                      )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹ "}
                   
                      />
                    <button disabled={processing || disabled 
                    
                    || succeeded }>

                      <span>{processing ? <p> </p> : "Buy now"}</span>
                    </button>
 
                </div>
                {error && <div>{error}</div>}
              </form>
              </div> 
        </div>
     </div>

    </div>
  )
}

export default Payment