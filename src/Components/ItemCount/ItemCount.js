import React, { useContext} from 'react'
import { CartContext } from '../../Context/Cart/CartContext';

import { Link } from "react-router-dom";

function ItemCount({isThisId, cantidad}) {

    const  value  = useContext(CartContext)
    
    const {count, setCount} =  value

    const ButtonAdder = () => {
        setCount(count + 1)
        
    }

    const ButtonRemover = () => {
        setCount(count - 1)
        
    }

    return (

        
            <>  
                <div className="d-flex">
                    {!isThisId?<button className="btn btn-danger mx-3 mb-2 btn-sm" onClick={() => ButtonRemover()} disabled={count <= 0 ? true : false }> - </button>:null}
                    {isThisId ? <Link to={`/ItemDetailContainer/${isThisId}`}><button className="btn btn-primary" style={{margin:'auto 3.8rem'}} >Ver Producto</button></Link>:<button disabled={count <= 0 ? true : false } onClick={() => cantidad()} className="btn btn-primary mb-2 btn-sm" >{count > 0 ? 'Agregar Al Carrito' : 'Elija Su Producto'}</button>}
                    {!isThisId?<button className="btn p-2 mb-2 border" >{count}</button>: null}
                    {!isThisId?<button className="btn btn-success mx-2 mb-2 btn-sm " onClick={() => ButtonAdder()} disabled={count >= 5 ? true : false } > + </button>: null}
                </div>
                    
            </>
        
    )
}

export default ItemCount
