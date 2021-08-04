import React,{useContext} from 'react'
import { CartContext } from '../../Context/Cart/CartContext';
import CartCard from '../CartCard/CartCard';
import CartForm from '../CartForm/CartForm';
import './Cart.scss';
import { Link, useHistory } from 'react-router-dom';
import { db } from '../../firebase';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Msg from '../MsgCompra/Msg';





function Cart() {

    const context = useContext(CartContext)

    const { cartState, summed, clearCart } = context


    const HandleHistory = useHistory();
    
  
    

  //Setter de users a firestore y el Ui de la compra hecha
  
  const BuyerSetter = async (compra, userId) => {
      await db.collection('buyers').doc().set(compra)
      


      //Getter del ultimo comprador
        db.collection('buyers').where('buyerId', '==', userId).onSnapshot((doc) => {
        doc.forEach((e) => {
            let newArr =  [e.data()]
            let orderId = e.id
            
            
            toast.success(<Msg newArr={newArr} orderId={orderId} />, {autoClose: 10000})
            
          }
        )
    });
   setTimeout (() => {
      clearCart();
      HandleHistory.push("/")
   }, 10000) 
   
  }



    return (
      <div className="container ">
        
          <div className="row flex-wrap-reverse">
          
            <div className="col-12 col-md-12 col-lg-6">
                <h2 className="text-start coffee__Cart--h2 mt-3 pb-3">Termine su Compra</h2>
                    <div className="row">
                        <div className="col text-start">
                            <h4 className="my-4 text-start">Complete su información</h4>
                            <CartForm BuyerSetter={BuyerSetter}/>
                        </div>
                    </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 " style={{position: 'sticky'}} >
                <h2 className="text-start mt-4">Resumen de Compra</h2>
                {cartState.length > 0 ? <div className="border " >
                    {cartState.map( cartItem =>
                        <CartCard items={cartItem} key={cartItem.id}/>)}
                    <hr className="coffee__hr mx-3"/>
                    <div>
                        <div className="d-flex px-4 ">
                          <h4 className=" text-start w-100 " >Subtotal </h4>
                          <p className="w-100 text-end ">${summed}</p>
                        </div>
                        <div className="d-flex px-4 ">
                          <h5 className="text-start w-100 ml-3">Costo de Envío</h5>
                          <p className="w-100 text-end ">GRATIS</p>
                        </div>  
                        <h5 className="text-start mx-4">+IVA (%21)</h5>
                    </div>
                    <hr className="coffee__hr mx-4"/>
                    <div className="d-flex px-4 my-4">
                      <h4 className="text-start ">Total</h4>
                      <p className="w-100 text-end align-self-center">${summed + (summed * 0.21)}</p>
                    </div>      
                </div>: 
                <div className="border p-4" >
                 <h3 className="mx-3 my-4">Vaya parece que ya no hay items en el carrito :(</h3>
                 <h4 className="text-center mx-4 my-5">Vuelve a la página principal para agregar alguno</h4>
                    <Link to="/"><button className="btn btn-primary">Página Principal</button></Link>
                </div>}  
            </div>
            
          </div>
        
      </div>
    );
}

export default Cart
