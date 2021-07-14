import React, { useEffect, useContext} from 'react'
import ItemList from '../ItemList/itemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router'
import {CartContext} from '../../Context/Cart/CartContext'

function ItemListContainer() {

    let { id } = useParams();

    const value = useContext(CartContext)

    const { getItems, fireData } = value

    
    useEffect(() => {
        
       getItems()
       //eslint-disable-next-line
    }, []);

    const filteredContainer = fireData.filter( r => id === r.tipo )


    console.log(filteredContainer)

    return (
        <section className="d-flex flex-wrap justify-content-center mx-5"  >
            {id ? <ItemList apiData={filteredContainer} /> :  <ItemList apiData={fireData}/>} 
        </section>

    )
}

export default ItemListContainer
