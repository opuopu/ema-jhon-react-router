import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const Usecart = (products) =>{
    const [cart,setcart] = useState([])

    // useEffect(() => {
    //     if (products.length) {
    //         const savedCart = getStoredCart();
    //         const storedCart = [];
    //         for (const key in savedCart) {
    //             const addedProduct = products.find(product => product.key === key);
    //             if (addedProduct) {
    //                 const quantity = savedCart[key];
    //                 addedProduct.quantity = quantity;
    //                 storedCart.push(addedProduct);
    //             }
    //         }
    //         setcart(storedCart);
    //     }
    // }, [products])

    useEffect(()=>{

        if(products.length){
const savecart = getStoredCart()
console.log(savecart);
const storecart = []
for(const key in savecart){
    console.log(key);

    const addedproduct = products.find(product => product.key === key)
    if(addedproduct){
        const quantity = savecart[key]
        addedproduct.quantity = quantity;
        storecart.push(addedproduct)
    }
}
setcart(storecart)
        }
    },[products])
    return [cart,setcart]


}
export default Usecart