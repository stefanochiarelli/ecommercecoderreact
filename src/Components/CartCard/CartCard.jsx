import React, {useContext} from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import './CartCard.scss'

const CartCard = ({items}) => {
    const context = useContext(CartContext)

    const {removeItem} = context

    const { producto, quantity, precio , id, img} = items

    
  return (
    
      <div className="d-flex my-4">
        <img className="coffee__productImg" src={img} alt={`Imagen de ${producto}`} style={{maxWidth: '220px'}} />
        <p className="mx-3 w-100">Producto: {producto}</p>
        <div className="text-end w-100 mr-4">
            <p className="mx-4 my-0" style={{fontWeight:'600'}}>${precio}</p>
            <p className="mx-4">Cantidad: {quantity}</p>
            <button className="mx-2 btn btn-link coffee__ahref" onClick={() => removeItem(id)}> Remover</button>
        </div>

     </div>  
    
  );
};

export default CartCard