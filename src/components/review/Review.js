import React from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../hooks/Hooks';
import Usecart from '../../hooks/useCart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewitem/ReviewItem';

const Review = () => {
    const[products] = useProducts()
    const [cart,setcart] = Usecart(products)
    let history = useHistory()
    const ClickHandler = () =>{
        history.push('/Confirmed')
        setcart([])
       clearTheCart()
    }
//    console.log(products);

   const removeitem = key =>{
    //    console.log(key);
       const newitem = cart.filter(product => product.key !== key)

       setcart(newitem)

       deleteFromDb(key)
      

     
      
   }
  
    return (
        <div className ="shop-container">
           <div className ="product-container">
{
    cart.map(product => <ReviewItem product = {product} removeitem ={removeitem}></ReviewItem>)
}
           </div>
           <div className ="cart-container">
           
            <Cart cart ={cart}>
                <button onClick ={ClickHandler} className ="btn-regular">order now</button></Cart> 
            
           </div>
        </div>
    
    );
};

export default Review;