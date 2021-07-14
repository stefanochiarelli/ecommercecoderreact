import React, { useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { CartContext } from '../../Context/Cart/CartContext'


const ItemDetailContainer = () => {

    let { id } = useParams();

    const value = useContext(CartContext)

    const { fireData } = value

      const filteredArray = fireData.filter((data) => id === data.id)

      

    return (
        <>
            <ItemDetail fArray={filteredArray}/>
        </>
    )
}

export default ItemDetailContainer
