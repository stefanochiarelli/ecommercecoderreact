import React from 'react'
import './CartWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        
            <div className="coffee__iconoCart p-3"><FontAwesomeIcon icon={faCartPlus} /></div>
        
    )
}

export default CartWidget
