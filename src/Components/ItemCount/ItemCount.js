import React, {useState} from 'react'
import { Link } from "react-router-dom";

function ItemCount({isThisId}) {

    
    

    const [count, useCount] =  useState(0)

    const ButtonAdder = () => {
        useCount(count + 1)
    }

    const ButtonRemover = () => {
        useCount(count - 1)
    }

    return (

        
            <>
                    <button className="btn btn-danger mx-3 mb-2 btn-sm" onClick={() => ButtonRemover()} disabled={count <= 0 ? true : false }> - </button>
                    <Link to={`/ItemDetailContainer/${isThisId}`}><button className="btn btn-primary mb-2 btn-sm" >Ver Producto</button></Link>
                    <button className="btn p-2 mb-2" >{count}</button>
                    <button className="btn btn-success mx-2 mb-2 btn-sm " onClick={() => ButtonAdder()} disabled={count >= 5 ? true : false } > + </button>
            </>
        
    )
}

export default ItemCount
