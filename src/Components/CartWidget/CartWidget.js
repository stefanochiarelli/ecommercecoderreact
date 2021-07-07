import React, {useContext} from 'react'
import './CartWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../Context/Cart/CartContext";

function CartWidget() {

    const  value  = useContext(CartContext)

    const { cartState } = value

    return (
        
            <div className="coffee__iconoCart p-3">
               {cartState.length > 0?<div className="h-20 w-20 bg-danger coffee__widget"> {cartState.length} </div>:null} 
                <FontAwesomeIcon icon={faCartPlus} />

            </div>
        
    )
}

export default CartWidget
