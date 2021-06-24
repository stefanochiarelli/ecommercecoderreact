import React, {useState} from 'react'

function ItemCount() {

    const [count, useCount] =  useState(0)

    const ButtonAdder = () => {
        useCount(count + 1)
    }

    const ButtonRemover = () => {
        useCount(count - 1)
    }

    return (

        
            <>
                    <button className="btn btn-danger mx-3 mb-2" onClick={() => ButtonRemover()} disabled={count <= 0 ? true : false }> - </button>
                    <button className="btn btn-primary mb-2 " > Add To Cart</button>
                    <button className="btn p-2 mb-2" >{count}</button>
                    <button className="btn btn-success mx-2 mb-2 " onClick={() => ButtonAdder()} disabled={count >= 5 ? true : false } > + </button>
            </>
        
    )
}

export default ItemCount
