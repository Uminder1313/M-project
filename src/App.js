import React, { useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51MgdMcSA0CUJmg32XuQrEW4NedciVfMjEccklEKFwLVGzU7UvvCUd3efyja2lebDC8l5n7Zw2sfP68IMPzRDntUr00gmCKyo3p')

function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() =>{
   
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>", authUser)
      if(authUser){

        dispatch({
          type:'SET_USER',
          user: authUser
        })

      }else{
       
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
     
    <Routes>
    <Route path="/login" element={[ <Login/> ]}/>
          <Route path="/checkout" element={[ <Header/>, <Checkout />]}/>
          <Route path="/payment" element={[ <Header/>, <Elements stripe={promise}><Payment /></Elements>]}/>
          <Route path="/" element={[ <Header/>, <Home />]}/>
        </Routes>
      
    </div>
    </Router>

  /* Header*/
  /* Home */
  );
}

export default App;
