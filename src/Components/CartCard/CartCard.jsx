import React, {useContext} from 'react';
import { CartContext } from '../../Context/Cart/CartContext';

const CartCard = ({items}) => {
    const context = useContext(CartContext)

    const {removeItem} = context

    const { producto, quantity, precio1 , id} = items

    console.log(id)
  return (
    
      <div className="d-flex my-4">
        <img src="https://via.placeholder.com/140x100" alt="" />
        <p className="mx-3 w-100">Producto: {producto}</p>
        <div className="text-end w-100 mr-4">
            <p className="mx-4 my-0" style={{fontWeight:'600'}}>${precio1}</p>
            <p className="mx-4">Cantidad: {quantity}</p>
            <button className="mx-2 btn btn-link coffee__ahref" onClick={() => removeItem(id)}> Remover</button>
        </div>

     </div>  
    
  );
};

export default CartCard